import {Column, Task} from '../../utils/class';
import PropTypes from 'prop-types';
import {ListTodo, Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {ColumnDropdownMenu} from './DropDownMenu';
import {SortableContext, useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {TaskContainer} from '../task/TaskContainer';
import {useMemo} from 'react';

export function ColumnContainer(
    {col, deleteColumn, taskList = [], updateColumnTitle, createTask},
) {
  const taskId = useMemo(() => taskList.map((task) => task.id), [taskList]);

  // Drag n Drop handler
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

  // On drag placeholder
  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        className='w-fit h-auto overflow-scroll no-scrollbar bg-gray-300/60 text-black rounded-md shadow-sm'
        style={style}
      >
        <div>
          <Button className='w-80 bg-transparent' >
            <div className='flex items-center font-bold' />
          </Button>
        </div>

        <div className='h-[70vh] bg-transparent w-80 mt-1 rounded-md'>

        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      className='w-fit h-auto  text-black rounded-md'
      style={style}
    >
      <div {...attributes} {...listeners} >
        <Button className='bg-white text-black hover:bg-white w-80 max-w-80 overflow-hidden flex justify-between'>
          <div className='flex items-center font-bold'>
            <ListTodo className='mr-4 font-semibold'/>
            <span className='truncate max-w-36 mr-1'>{col.title}</span>
            ({taskList ? taskList.length : 0})
          </div>

          {/* Helper buttons */}
          <div className='flex items-center'>
            <Plus
              className='mr-2 w-5 h-5 hover:bg-slate-200 hover:rounded-full'
              onClick={() => {
                createTask(col.id);
              }}
            />

            <ColumnDropdownMenu
              id={col.id}
              deleteColumn={deleteColumn}
              updateColumnTitle={updateColumnTitle}
            />
          </div>
        </Button>
      </div>

      {/* Task Containers */}
      <div className='h-[70vh] w-80 mt-1 rounded-md overflow-scroll no-scrollbar'>
        <SortableContext items={taskId}>
          {taskList && taskList.map((task, index) =>
            <div key={index}>
              <TaskContainer task={task} />
            </div>,
          )}
        </SortableContext>
      </div>
    </div>
  );
}

ColumnContainer.propTypes = {
  col: PropTypes.instanceOf(Column),
  deleteColumn: PropTypes.func,
  taskList: PropTypes.arrayOf(PropTypes.instanceOf(Task)),
  updateColumnTitle: PropTypes.func,
  createTask: PropTypes.func,
};
