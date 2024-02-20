import PropTypes from 'prop-types';
import {Task} from '../../utils/class';
import {Badge} from '@/components/ui/badge';

export const TaskContainer = ({task}) => {
  return (
    <div className=' bg-white mb-1 p-2 rounded-md'>
      {task.tags && task.tags.map((tag) => (
        <Badge key={tag.id} className={`${tag.bg} mr-2`}>{tag.title}</Badge>
      ))}
      <div>
        {task.content}
      </div>
    </div>
  );
};

TaskContainer.propTypes = {
  task: PropTypes.instanceOf(Task),
};
