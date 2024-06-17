import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowUpFromDot } from 'lucide-react';
import { useState } from 'react';

import { TaskActivity } from '../../../utils/class';
import { formatDate } from '../../../utils/date-converter';

const sampleActivities = [
  new TaskActivity(1, 'create', 'Alice', 'create'),
  new TaskActivity(2, 'update', 'Bob', 'update', '2024-06-16T08:00:00Z'),
  new TaskActivity(
    4,
    'comment',
    'Frank',
    'comment',
    null,
    'This task needs to be reviewed.'
  ),
  new TaskActivity(5, 'update', 'Judy', 'update'),
  new TaskActivity(6, 'assign', 'Alice', 'assign'),
  new TaskActivity(7, 'update', 'Alice', 'update'),
  new TaskActivity(8, 'comment', 'Bob', 'comment', null, 'I agree.'),
];

const TaskActivityComponentTmp = ({ activity }) => {
  if (!activity) {
    return null;
  }
  const isComment = activity.comment !== null;
  return (
    <ol class="relative border-s border-gray-200 dark:border-gray-700 h-full">
      <li class="ms-4">
        <div className=" flex items-center">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
          <time class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {formatDate(activity.createdAt)}
          </time>
        </div>
        <div class="my-4 text-base font-semibold text-gray-600 dark:text-white">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            {activity.author} {activity.subtitle}
          </div>
          {isComment && (
            <p className="italic text-gray-500 text-sm mt-2">
              {activity.comment}
            </p>
          )}
        </div>
      </li>
    </ol>
  );
};

export const TaskDiscussion = () => {
  const [comment, setComment] = useState('');

  const onCommentSubmit = () => {
    console.log('comment', comment);
    setComment('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {sampleActivities.map(activity => (
            <TaskActivityComponentTmp key={activity.id} activity={activity} />
          ))}
        </ol>
      </div>
      <div className="h-fit flex-none flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="Leave a comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
        <Button onClick={onCommentSubmit}>
          <ArrowUpFromDot className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
