import PropTypes from 'prop-types';
import {Task} from '../../utils/class';
import {Badge} from '@/components/ui/badge';
import {MemberList} from '../MemberList';
import Divider from '../../../../components/general/divider';
import {UserRoundPlus, MoreHorizontal, List, Paperclip, Calendar, Flag} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export const TaskContainer = ({task}) => {
  const {setNodeRef, attributes, transform, transition, listeners, isDragging} = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        className='bg-white mb-1 py-1 px-4 rounded-md h-[22vh]'
        style={style}
      >
        <div className='flex justify-between items-center'>
          <div className='flex'>
            <div className="bg-gray-300 h-3 w-16 animate-pulse rounded-md mr-2" />
            <div className="bg-gray-300 h-3 w-16 animate-pulse rounded-md mr-2" />
          </div>
          <div className="bg-gray-300 h-6 w-6 animate-pulse rounded-md"></div>
        </div>

        <div className='text-xl font-semibold bg-gray-300 h-6 w-32 animate-pulse rounded-md mt-1'/>

        <div className='flex justify-between items-center mt-1'>
          <div className="flex gap-2">
            <div className='bg-gray-300 h-6 w-6 animate-pulse rounded-full'></div>
            <div className='bg-gray-300 h-6 w-6 animate-pulse rounded-full'></div>
            <div className='bg-gray-300 h-6 w-6 animate-pulse rounded-full'></div>
          </div>
          <div className="bg-gray-300 h-6 w-6 animate-pulse rounded-md"></div>
        </div>

        <div className='mt-1'>
          <div className="bg-gray-300 h-1 w-full animate-pulse"></div>
        </div>

        <div className='flex items-center mt-2 justify-between mb-1'>
          <div className='flex gap-4 text-sm'>
            <div className='flex items-center gap-1'> <div className='bg-gray-300 h-4 w-4 animate-pulse rounded-md'/></div>
            <div className='flex items-center gap-1'> <div className='bg-gray-300 h-4 w-4 animate-pulse rounded-md'/></div>
            <div className='flex items-center gap-1'> <div className='bg-gray-300 h-4 w-4 animate-pulse rounded-md'/></div>
          </div>
          <div className="bg-gray-300 h-4 w-4 animate-pulse rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='bg-white mb-1 py-1 px-4 rounded-md h-[22vh]'
      {...attributes}
      {...listeners}
    >
      <div className='flex justify-between items-center'>
        <div>
          {task.tags && task.tags.map((tag) => (
            <Badge key={tag.id} className={`${tag.bg} mr-2`}>{tag.title}</Badge>
          ))}
        </div>

        <Button variant="ghost"> <MoreHorizontal /></Button>

      </div>

      <div className='text-xl font-semibold'>
        {task.title}
      </div>

      <div className='flex justify-between items-center'>
        <MemberList width={6} height={6}/>
        <Button variant="ghost"> <UserRoundPlus className='w-5 h-5'/></Button>
      </div>

      <Divider
        width='100%' height='1px' color='rgba(0,0,0,0.20'/>

      <div className='flex items-center mt-3 justify-between'>
        <div className='flex gap-4 text-sm'>
          <div className='flex items-center gap-1'> <List className='w-4 h-5'/>3</div>
          <div className='flex items-center gap-1'> <Paperclip className='w-4 h-5'/>2</div>
          <div className='flex items-center gap-1'> <Calendar className='w-4 h-5'/>3 days</div>
        </div>
        <Flag className='w-4 h-4' />
      </div>
    </div>
  );
};

TaskContainer.propTypes = {
  task: PropTypes.instanceOf(Task),
};