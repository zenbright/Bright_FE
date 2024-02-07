import {Column} from '../utils/ColumnClass';
import PropTypes from 'prop-types';
import {ListTodo, Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {ColumnDropdownMenu} from './DropDownMenu';
import {useState} from 'react';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function ColumnContainer({col, deleteColumn}) {
  const [taskCount, setTaskCount] = useState(0);

  const {setNodeRef, attributes, transform, transition, listeners} = useSortable({
    id: col.id,
    data: {
      type: 'Column',
      col,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const increaseTaskCount = () => {
    setTaskCount(taskCount + 1);
  };

  return (
    <div
      ref={setNodeRef}
      className='w-80 h-auto max-h-80 overflow-scroll no-scrollbar text-black rounded-md shadow-sm'
      style={style}
    >
      <div {...attributes} {...listeners} >
        <Button className='bg-white text-black hover:bg-white w-72 flex justify-between'>
          <div className='flex items-center font-bold'>
            <ListTodo className='mr-4 font-semibold'/> {col.title} ({taskCount})
          </div>
          <div className='flex items-center'>
            <Plus
              onMouseDown={increaseTaskCount}
              className='mr-2 w-5 h-5 hover:bg-slate-200 hover:rounded-full'
            />
            <ColumnDropdownMenu id={col.id} deleteColumn={deleteColumn}/>
          </div>
        </Button>
      </div>
    </div>
  );
}

ColumnContainer.propTypes = {
  col: PropTypes.instanceOf(Column),
  deleteColumn: PropTypes.func,
};
