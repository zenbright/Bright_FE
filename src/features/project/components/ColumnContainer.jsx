import {Column} from '../utils/ColumnClass';
import PropTypes from 'prop-types';
import {ListTodo, Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {ColumnDropdownMenu} from './DropDownMenu';
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export function ColumnContainer({col, deleteColumn, taskCount = 0, updateTaskCount, updateColumnTitle}) {
  const {setNodeRef, attributes, transform, transition, listeners, isDragging} = useSortable({
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

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        className='w-fit h-auto overflow-scroll no-scrollbar bg-gray-300/60 text-black rounded-md shadow-sm'
        style={style}
      >
        <div {...attributes} {...listeners} >
          <Button className='w-80 bg-transparent' >
            <div className='flex items-center font-bold' />
          </Button>
        </div>

        <div className='h-[62vh] bg-transparent w-80 mt-1 rounded-md'>

        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      className='w-fit h-auto overflow-scroll no-scrollbar text-black rounded-md'
      style={style}
    >
      <div {...attributes} {...listeners} >
        <Button className='bg-white text-black hover:bg-white w-80 flex justify-between'>
          <div className='flex items-center font-bold'>
            <ListTodo className='mr-4 font-semibold'/> {col.title} ({taskCount})
          </div>
          <div className='flex items-center'>
            <Plus className='mr-2 w-5 h-5 hover:bg-slate-200 hover:rounded-full' onClick={() => {
              updateTaskCount(col.id);
            }}/>
            <ColumnDropdownMenu id={col.id} deleteColumn={deleteColumn} updateColumnTitle={updateColumnTitle}/>
          </div>
        </Button>
      </div>

      <div className='h-[62vh] bg-white w-80 mt-1 rounded-md'>

      </div>
    </div>
  );
}

ColumnContainer.propTypes = {
  col: PropTypes.instanceOf(Column),
  deleteColumn: PropTypes.func,
  taskCount: PropTypes.number,
  updateTaskCount: PropTypes.func,
  updateColumnTitle: PropTypes.func,
};
