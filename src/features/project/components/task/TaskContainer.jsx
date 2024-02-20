import PropTypes from 'prop-types';
import {Task} from '../../utils/class';
import {Badge} from '@/components/ui/badge';
import {MemberList} from '../MemberList';
import Divider from '../../../../components/general/divider';
import {UserRoundPlus, MoreHorizontal, List, Paperclip, Calendar, Flag} from 'lucide-react';
import {Button} from '@/components/ui/button';

export const TaskContainer = ({task}) => {
  return (
    <div className=' bg-white mb-1 py-1 px-4 rounded-md'>
      <div className='flex justify-between items-center'>
        <div className=''>
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

      <div className='flex items-center mt-2 justify-between mb-1'>
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
