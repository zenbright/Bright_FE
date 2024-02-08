import {Button} from '@/components/ui/button';
import {PlusCircle} from 'lucide-react';
import {useState} from 'react';
import {Column} from '../utils/ColumnClass';
import {ColumnContainer} from './ColumnContainer';
import {DndContext, DragOverlay, useSensors, useSensor} from '@dnd-kit/core';
import {SortableContext} from '@dnd-kit/sortable';
import {useMemo} from 'react';
import {createPortal} from 'react-dom';
import {MouseSensor, TouchSensor} from '@dnd-kit/core';

export const KanbanBoard = () => {
  const [column, setColumn] = useState([]);
  const [activeColumn, setActiveColumn] = useState(null);
  const [taskCount, setTaskCount] = useState({});

  const columnId = useMemo(() => column.map((col) => col.id), [column]);

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

    setColumn([...column, newColumn]);
  };

  const deleteColumn = (id) => {
    const filteredColumn = column.filter((col) => col.id !== id);
    setColumn(filteredColumn);
  };

  const handleDragStart = (event) => {
    console.log('Start', event);
    if (event.active.data.current.type === 'Column') {
      setActiveColumn(event.active.data.current.col);
    }
  };

  const updateTaskCount = (colId) => {
    setTaskCount((prevTaskCount) => {
      const newTaskCount = {...prevTaskCount};
      newTaskCount[colId] = (newTaskCount[colId] || 0) + 1;
      return newTaskCount;
    });
  };

  return (
    <div className='mt-4'>
      <DndContext onDragStart={handleDragStart} sensors={sensors}>
        <div className={`flex ${column.length === 0 ? 'gap-0' : 'gap-3'}`}>
          <div className='flex gap-3'>
            <SortableContext items={columnId}>
              {column.map((col, index) => (
                <div key={index}>
                  <ColumnContainer taskCount={taskCount[col.id]} updateTaskCount={updateTaskCount} col={col} deleteColumn={deleteColumn}/>
                </div>
              ))}
            </SortableContext>
          </div>
          <Button onClick={createColumn}>
            <PlusCircle className='mr-2'/> Create new column
          </Button>
        </div>

        {createPortal(
            <DragOverlay>
              {activeColumn && (
                <ColumnContainer taskCount={taskCount[activeColumn.id]} updateTaskCount={updateTaskCount} col={activeColumn} deleteColumn={deleteColumn} />
              )}
            </DragOverlay>,
            document.body,
        )}
      </DndContext>
    </div>
  );
};
