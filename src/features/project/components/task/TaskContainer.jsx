import PropTypes from 'prop-types';
import {Task} from '../../utils/class';
import {Badge} from '@/components/ui/badge';
import {MemberList} from '../MemberList';
import Divider from '../../../../components/general/divider';
import {UserRoundPlus, MoreHorizontal, List, Paperclip, Calendar, Flag} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {useRef} from 'react';
import {useLayoutEffect} from 'react';
import {useState} from 'react';

export const TaskContainer = ({task}) => {
  const ref = useRef();
  const [dimensions, setDimensions] = useState({width: 0, height: 0});

  // Calculate current task size
  useLayoutEffect(() => {
    if (ref.current) {
      const newWidth = ref.current.offsetWidth;
      const newHeight = ref.current.offsetHeight;
      setDimensions({width: newWidth, height: newHeight});

      // Prevent value reset
      sessionStorage.setItem('taskDimensions', JSON.stringify({width: newWidth, height: newHeight}));
    }
  }, [task]);

  useLayoutEffect(() => {
    // Retrieve dimensions from local storage when the component mounts
    const storedDimensions = sessionStorage.getItem('taskDimensions');
    if (storedDimensions) {
      const {width, height} = JSON.parse(storedDimensions);
      setDimensions({width, height});
    }
  }, []);

  // Handle drag n drop
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

  // On drag placeholder
  if (isDragging) {
    return (
      // Task Skeleton
      <div
        ref={setNodeRef}
        className='bg-white mb-1 py-1 px-4 rounded-md'
        style={
          {...style,
            width: dimensions.width,
            height: dimensions.height,
          }
        }
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
            <div className='bg-gray-300 h-6 w-6 animate-pulse rounded-full'/>
            <div className='bg-gray-300 h-6 w-6 animate-pulse rounded-full'/>
            <div className='bg-gray-300 h-6 w-6 animate-pulse rounded-full'/>
          </div>
          <div className="bg-gray-300 h-6 w-6 animate-pulse rounded-md"/>
        </div>

        <div className='mt-1'>
          <div className="bg-gray-300 h-1 w-full animate-pulse"/>
        </div>

        <div className='flex items-center mt-2 justify-between mb-1'>
          <div className='flex gap-4 text-sm'>
            <div className='flex items-center gap-1'>
              <div className='bg-gray-300 h-4 w-4 animate-pulse rounded-md'/>
            </div>

            <div className='flex items-center gap-1'>
              <div className='bg-gray-300 h-4 w-4 animate-pulse rounded-md'/>
            </div>

            <div className='flex items-center gap-1'>
              <div className='bg-gray-300 h-4 w-4 animate-pulse rounded-md'/>
            </div>
          </div>
          <div className="bg-gray-300 h-4 w-4 animate-pulse rounded-md" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='bg-white rounded-md'
      {...attributes}
      {...listeners}
    >
      <div ref={ref} className='mb-1 py-1 px-4 '>
        <div className='flex justify-between items-center'>
          <div>
            {task.tags && task.tags.map((tag) => (
              <Badge
                key={tag.id}
                className={`${tag.bg} mr-2`}>
                {tag.title}
              </Badge>
            ))}
          </div>

          <Button variant="ghost">
            <MoreHorizontal />
          </Button>
        </div>

        {/* Task Contents */}
        <div className='text-xl font-semibold truncate max-w-52'>
          {task.title}
        </div>

        <div className='text-sm truncate max-w-60'>
          {task.des}
        </div>

        {/* Asignee List */}
        <div className='flex justify-between items-center'>
          <MemberList width={6} height={6}/>

          <Button variant="ghost">
            <UserRoundPlus className='w-5 h-5'/>
          </Button>
        </div>

        <Divider width='100%' height='1px' color='rgba(0,0,0,0.20'/>

        {/* Helper Buttons */}
        <div className='flex items-center mt-1 justify-between'>
          <div className='flex gap-2 text-sm'>
            <div className='flex items-center gap-1 hover:bg-slate-300/20 hover:rounded-md p-2'>
              <List className='w-4 h-5'/>3
            </div>

            <div className='flex items-center gap-1 hover:bg-slate-300/20 hover:rounded-md p-2'>
              <Paperclip className='w-4 h-5'/>2
            </div>

            <div className='flex items-center gap-1 hover:bg-slate-300/20 hover:rounded-md p-2'>
              <Calendar className='w-4 h-5'/>3 days
            </div>
          </div>

          <Button variant="ghost">
            <Flag className='w-4 h-4'/>
          </Button>
        </div>
      </div>
    </div>
  );
};

TaskContainer.propTypes = {
  task: PropTypes.instanceOf(Task),
};
