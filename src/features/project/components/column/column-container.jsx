import {Column, Task} from '../../utils/class';
import PropTypes from 'prop-types';
import {ListTodo, Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {ColumnDropdownMenu} from './column-action-list';
import {SortableContext, useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import {TaskContainer} from '../task/task-container';
import {useMemo} from 'react';
import {OverlayScrollbarsComponent} from 'overlayscrollbars-react';
import TaskCreationForm from '../task/task-creation-form';
import {useState} from 'react';

export function ColumnContainer(
    {
      col,
      deleteColumn,
      taskList = [],
      updateColumnTitle,
      createTask,
    },

) {
  const [isCreateNewTask, setIsCreateNewTask] = useState(false);

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
        className='w-fit h-auto overflow-hidden bg-gray-300/60 rounded-md mb-1'
        style={style}
      >
        <div>
          <Button className='w-80 bg-transparent' >
            <div className='flex items-center font-bold' />
          </Button>
        </div>

        <div className=' h-[70vh] bg-transparent w-80 rounded-md mt-1'>

        </div>
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      className='w-fit h-auto text-black rounded-md mb-1'
      style={style}
    >
      <div {...attributes} {...listeners} >
        <div
          className='bg-white p-2 border-2 border-slate-200 text-sm rounded-md w-80 max-w-80 overflow-hidden flex justify-between '>
          <div className='flex font-bold h-5 items-center'>
            <ListTodo className='mr-1 h-5'/>
            <span className='truncate max-w-36 mr-1'>{col.title}</span>
            ({taskList ? taskList.length : 0})
          </div>

          {/* Helper buttons */}
          <div className='flex items-center'>
            <Plus
              className='mr-2 w-5 h-5 hover:bg-slate-200 hover:rounded-full'
              onClick={() => {
                // createTask(col.id);
                setIsCreateNewTask(true);
              }}
            />

            <ColumnDropdownMenu
              id={col.id}
              deleteColumn={deleteColumn}
              updateColumnTitle={updateColumnTitle}
            />
          </div>
        </div>
      </div>

      <OverlayScrollbarsComponent
        element="div"
        options={{scrollbars: {autoHide: 'move'}}}
        defer
      >
        {/* Task Containers */}
        <div className='h-[70vh] w-80 rounded-md mt-1'>
          <SortableContext items={taskId}>
            {taskList && taskList.map((task, index) =>
              <div key={index}>
                <TaskContainer task={task} />
              </div>,
            )}
          </SortableContext>
        </div>
      </OverlayScrollbarsComponent>

      {isCreateNewTask &&
      <TaskCreationForm
        isCreateNewTask={isCreateNewTask}
        setIsCreateNewTask={setIsCreateNewTask}
        createTask={createTask}
        colId={col.id}/>}
    </div>
  );
}

ColumnContainer.propTypes = {
  col: PropTypes.instanceOf(Column),
  deleteColumn: PropTypes.func,
  taskList: PropTypes.arrayOf(PropTypes.instanceOf(Task)),
  updateColumnTitle: PropTypes.func,
  createTask: PropTypes.func,
  setIsCreateNewTask: PropTypes.func,
};
