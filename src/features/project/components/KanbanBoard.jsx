import {Button} from '@/components/ui/button';
import {PlusCircle} from 'lucide-react';
import {useState} from 'react';
import {Column, Task} from '../utils/class';
import {ColumnContainer} from './column/ColumnContainer';
import {DndContext, DragOverlay, useSensors, useSensor} from '@dnd-kit/core';
import {SortableContext, arrayMove} from '@dnd-kit/sortable';
import {useMemo} from 'react';
import {createPortal} from 'react-dom';
import {MouseSensor, TouchSensor} from '@dnd-kit/core';

export const KanbanBoard = () => {
  const [columns, setColumn] = useState([]);
  const [activeColumn, setActiveColumn] = useState(null);
  const [tasks, setTaskList] = useState({});

  const columnId = useMemo(() => columns.map((col) => col.id), [columns]);

  const sensors = useSensors(
      useSensor(MouseSensor, {
        activationConstraint: {
          distance: 8,
        },
      }),
      useSensor(TouchSensor, {
        activationConstraint: {
          delay: 200,
          tolerance: 6,
        },
      }),
  );

  const createColumn = () => {
    const newColumn = new Column('TODO');

    setColumn([...columns, newColumn]);
  };

  const deleteColumn = (id) => {
    const filteredColumn = columns.filter((col) => col.id !== id);
    setColumn(filteredColumn);
  };

  const updateColumnTitle = (id, title) => {
    const updatedColumn = columns.map((col) => {
      if (col.id !== id) {
        return col;
      }
      col.title = title;
      return col;
    });

    setColumn(updatedColumn);
  };

  const handleDragStart = (event) => {
    if (event.active.data.current.type === 'Column') {
      setActiveColumn(event.active.data.current.col);
    }
  };

  const handleDragEnd = (event) => {
    const {active, over} = event;

    if (!over) return;

    const {id: activeColumnId} = active;
    const {id: overColumnId} = over;

    if (activeColumnId === overColumnId) return;

    setColumn((column) => {
      const activeIndex = column.findIndex((col) => col.id === activeColumnId);
      const overIndex = column.findIndex((col) => col.id === overColumnId);

      // Check if both indexes are valid
      if (activeIndex !== -1 && overIndex !== -1) {
        return arrayMove(column, activeIndex, overIndex);
      }
      return column; // Return the original array if indexes are invalid
    });
  };


  const createTask = (colId) => {
    setTaskList((prevTaskList) => {
      const updatedTaskList = {...prevTaskList};
      if (!updatedTaskList[colId]) {
        updatedTaskList[colId] = [];
      }
      updatedTaskList[colId].push(new Task(colId, 'Hello'));
      return updatedTaskList;
    });
  };

  return (
    <div className="mt-2 overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent scrollbar-thumb-rounded-lg">
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <div className={`flex ${columns.length === 0 ? 'gap-0 px-4' : 'gap-3'} mb-3`}>
          <div className='flex gap-3'>
            <SortableContext items={columnId}>
              {columns.map((col, index) => (
                <div key={index}>
                  <ColumnContainer
                    key={col.id}
                    col={col}
                    deleteColumn={deleteColumn}
                    updateColumnTitle={updateColumnTitle}
                    createTask={createTask}
                    taskList={tasks[col.id]}
                  />
                </div>
              ))}
            </SortableContext>
          </div>
          <Button onClick={createColumn}>
            <PlusCircle className='mr-2'/> Create new column
          </Button>
        </div>

        {createPortal(
            <DragOverlay >
              {activeColumn && (
                <ColumnContainer
                  col={activeColumn}
                  deleteColumn={deleteColumn}
                  taskList={tasks[activeColumn.id]}
                />
              )}
            </DragOverlay>,
            document.body,
        )}
      </DndContext>
    </div>
  );
};
