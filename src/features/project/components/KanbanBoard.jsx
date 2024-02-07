import {Button} from '@/components/ui/button';
import {PlusCircle} from 'lucide-react';
import {useState} from 'react';
import {Column} from '../utils/ColumnClass';
import {ColumnContainer} from './ColumnContainer';
import {DndContext} from '@dnd-kit/core';
import {SortableContext} from '@dnd-kit/sortable';
import {useMemo} from 'react';

export const KanbanBoard = () => {
  const [column, setColumn] = useState([]);

  const columnIds = useMemo(() => column.map((col) => col.id), [column]);

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
  };


  return (
    <div className='mt-4'>
      <DndContext onDragStart={handleDragStart}>
        <div className={`flex ${column.length === 0 ? 'gap-0' : 'gap-3'}`}>
          <div className='flex gap-3'>
            <SortableContext items={columnIds}>
              {column.map((col, index) => (
                <div key={index}>
                  <ColumnContainer key={col.id} col={col} deleteColumn={deleteColumn}/>
                </div>
              ))}
            </SortableContext>
          </div>
          <Button onClick={createColumn}>
            <PlusCircle className='mr-2'/> Create new column
          </Button>
        </div>
      </DndContext>

    </div>
  );
};
