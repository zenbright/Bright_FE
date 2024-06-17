import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpFromDot } from 'lucide-react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { TaskActivity } from '../../../utils/class';
import { timeAgo } from '../../../utils/date-converter';

// Sample instances array
const sampleActivities = [
  new TaskActivity(
    1,
    'Alice',
    'comment',
    '2023-06-17T09:00:00Z',
    'This task needs to be done by the end of the week.'
  ),
  new TaskActivity(
    2,
    'Bob',
    'update',
    '2023-06-17T09:00:00Z',
    null,
    'In Progress'
  ),
  new TaskActivity(
    3,
    'Charlie',
    'assign',
    '2023-06-17T09:00:00Z',
    null,
    'Alice'
  ),
  new TaskActivity(
    4,
    'Eve',
    'comment',
    '2023-06-17T09:00:00Z',
    'I can help with this task.'
  ),
  new TaskActivity(
    5,
    'Alice',
    'update',
    '2023-06-17T09:00:00Z',
    null,
    'Completed'
  ),
];

const TaskActivityComponent = ({ activity, isLastItem }) => {
  const isComment = activity.comment !== null && activity.comment !== undefined;

  return (
    <ol className="relative border-gray-200 dark:border-gray-700">
      <li className={`${isLastItem ? '' : 'mb-8'} ms-6`}>
        <span className="absolute z-50 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <img
            className="rounded-full shadow-lg"
            src="https://github.com/shadcn.png"
            alt={isComment ? 'Thomas Lean image' : 'Bonnie image'}
          />
        </span>
        <div className=" flex flex-col p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
          <div
            className={`items-center justify-between ${isComment ? 'mb-3' : ''} sm:flex`}
          >
            <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">
              {timeAgo(activity.createdAt)}
            </time>
            <div className="text-sm font-normal text-gray-500 dark:text-gray-300 gap-1 text-left">
              <span className="font-bold">{activity.author}</span>{' '}
              {activity.subtitle}{' '}
              <span className="italic">
                {activity.target ? activity.target : ''}
              </span>
            </div>
          </div>
          {isComment && (
            <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">
              {activity.comment}
            </div>
          )}
        </div>
      </li>
    </ol>
  );
};

export const TaskDiscussion = () => {
  const [comment, setComment] = useState('');
  const [remainingActivitySectionHeight, setRemainingActivitySectionHeight] =
    useState(0);
  const [activities, setActivities] = useState(sampleActivities);
  const inputRef = useRef(null);
  const activitySectionRef = useRef(null);
  const parentDivRef = useRef(null);

  const onCommentSubmit = () => {
    setActivities([
      ...activities,
      new TaskActivity(uuidv4(), 'Quoc Doan', 'comment', new Date(), comment),
    ]);

    setComment('');
  };

  useEffect(() => {
    if (!activitySectionRef.current) {
      return;
    }

    const { viewport } = activitySectionRef.current.osInstance().elements();

    // scroll to bottom
    viewport.scrollTo({ top: viewport.scrollHeight, behavior: 'smooth' });
  }, [activities]);

  // Calculate remaining height
  useEffect(() => {
    const updateMaxHeight = () => {
      const remainingActivitySectionHeight =
        parentDivRef.current.clientHeight - inputRef.current.clientHeight;
      setRemainingActivitySectionHeight(remainingActivitySectionHeight);
    };

    updateMaxHeight();

    window.addEventListener('resize', updateMaxHeight);

    return () => {
      window.removeEventListener('resize', updateMaxHeight);
    };
  }, []);

  return (
    <div ref={parentDivRef} className="flex flex-col h-full justify-between">
      <OverlayScrollbarsComponent
        element="div"
        ref={activitySectionRef}
        options={{ scrollbars: { autoHide: 'move' } }}
        style={{ maxHeight: `${remainingActivitySectionHeight}px` }}
      >
        <div
          id="activity-section"
          className="relative overflow-y-auto pl-3 mb-3"
        >
          <div className="absolute left-3 h-full border-s" />
          {activities.map((activity, index) => (
            <TaskActivityComponent
              key={activity.id}
              activity={activity}
              isLastItem={index === activities.length - 1}
            />
          ))}
        </div>
      </OverlayScrollbarsComponent>

      <div className={`flex items-center space-x-2 mb-1 z-0`}>
        <Input
          ref={inputRef}
          type="text"
          placeholder="Leave a comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              onCommentSubmit();
            }
          }}
        />
        <Button onClick={onCommentSubmit}>
          <ArrowUpFromDot className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
