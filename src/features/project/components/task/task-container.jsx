import PropTypes from 'prop-types';
import { Task } from '../../utils/class';
import { Badge } from '@/components/ui/badge';
import { MemberList } from '../member-list';
import Divider from '../../../../components/general/divider';
import { UserRoundPlus, List, Paperclip, Calendar, Flag, Settings2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useRef } from 'react';
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { differenceInDays } from 'date-fns';
import { DetailedTaskView } from './detailed-task-view/detailed-task-view';
import tinycolor from 'tinycolor2';
import TaskCreationForm from './task-creation-form';

export const TaskContainer = ({ task, onDelete }) => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isShowTaskDetailed, setIsShowTaskDetailed] = useState(false);
  const [remainingDateText, setRemainingDateText] = useState('');
  const [isEditTask, setIsEditTask] = useState(false);

  // Calculate current task size
  useLayoutEffect(() => {
    if (ref.current) {
      const newWidth = ref.current.offsetWidth;
      const newHeight = ref.current.offsetHeight;
      setDimensions({ width: newWidth, height: newHeight });

      // Prevent value reset
      sessionStorage.setItem('taskDimensions', JSON.stringify({ width: newWidth, height: newHeight }));
    }
  }, [task]);

  // Fetch size on first load
  useLayoutEffect(() => {
    // Retrieve dimensions from local storage when the component mounts
    const storedDimensions = sessionStorage.getItem('taskDimensions');
    if (storedDimensions) {
      const { width, height } = JSON.parse(storedDimensions);
      setDimensions({ width, height });
    }
    // Calculate due date
    if (task.endDate) {
      const endDate = new Date(task.endDate);
      const today = new Date();

      const differenceDays = differenceInDays(endDate, today);

      const remainingDateText = differenceDays > 0 ? `${differenceDays} days left` : differenceDays == 0 ? 'Today' : `${Math.abs(differenceDays)} days ago`;

      setRemainingDateText(remainingDateText);
    }
  }, []);

  // Handle drag n drop
  const { setNodeRef, attributes, transform, transition, listeners, isDragging } = useSortable({
    id: task.id,
    data: { type: 'Task', task },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  // Drag item placeholder
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={
          {
            width: dimensions.width,
            height: dimensions.height,
            ...style,
          }
        }
        className='bg-gray-300/60 rounded-md mb-1 border-2'
      />
    );
  }

  return (
    <div ref={ref}>
      {/* Task detailed view */}
      {isShowTaskDetailed &&
        <DetailedTaskView
          isShowTaskDetailed={isShowTaskDetailed}
          setIsShowTaskDetailed={setIsShowTaskDetailed}
          task={task}
        />
      }

      {/* Edit task */}
      {isEditTask && (
        <TaskCreationForm
          isOpen={isEditTask}
          setIsOpen={setIsEditTask}
          onDelete={onDelete}
          task={task} />
      )}

      {/* Task Container */}
      <div
        ref={setNodeRef}
        style={style}
        className='bg-white rounded-md border-2 border-slate-200 mb-1'
        {...attributes}
        {...listeners}
      >
        <div className='pl-3 pr-1' >
          <div className='flex justify-between items-center'>
            <div className='flex gap-1'>
              {task.tags && task.tags.slice(0, 2).map((tag) => (
                <Badge
                  key={tag.id}
                  style={{
                    backgroundColor: tinycolor(tag.color).lighten(50),
                    color: tinycolor(tag.color),
                  }}
                  className='h-6'>
                  {tag.title}
                </Badge>
              ))}

              {task.tags.length > 2 && (
                <Badge className='bg-slate-200 text-slate-700 h-6 hover:bg-slate-300'>
                  + {task.tags.length - 2}
                </Badge>
              )}
            </div>

            <Button
              onClick={() => {
                setIsEditTask(true);
              }}
              variant="ghost"
            >
              <Settings2 className=' w-4 h-4' />
            </Button>
          </div>

          <div onClick={() => setIsShowTaskDetailed(true)}>
            {/* Task Contents */}
            <div className='text-xl font-semibold truncate max-w-52'>
              {task.title}
            </div>

            <div className='text-sm truncate max-w-60'>
              {task.des}
            </div>

            {/* Asignee List */}
            <div className='flex justify-between items-center'>
              <MemberList width={6} height={6} members={task.memList} />

              {/* prevent on trigger drag event */}
              <Button onClick={(e) => e.stopPropagation()} variant="ghost">
                <UserRoundPlus className='w-4 h-4' />
              </Button>
            </div>

            <Divider width='100%' height='1px' color='rgba(0,0,0,0.20)' />

            {/* Helper Buttons */}
            <div className='flex items-center justify-between'>
              <div className='flex gap-2 text-sm'>
                <div className='flex items-center gap-1 hover:bg-slate-300/20 hover:rounded-md p-2'>
                  <List className='w-4 h-5' />{task.todos.length}
                </div>

                <div className='flex items-center gap-1 hover:bg-slate-300/20 hover:rounded-md p-2'>
                  <Paperclip className='w-4 h-5' />{task.attachments.length}
                </div>

                {task.endDate &&
                  <div className='flex items-center gap-1 hover:bg-slate-300/20 hover:rounded-md p-2'>
                    <Calendar className='w-4 h-5' /> {task.endDate && <div>{remainingDateText}</div>}
                  </div>
                }
              </div>

              <Button variant="ghost">
                <Flag className='w-4 h-4' />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TaskContainer.propTypes = {
  task: PropTypes.instanceOf(Task),
  onDelete: PropTypes.func,
};
