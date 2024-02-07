import {Button} from '@/components/ui/button';
import {PlusCircle} from 'lucide-react';
import {useState} from 'react';
import {Column} from '../utils/ColumnClass';
import {ColumnContainer} from './ColumnContainer';

export const KanbanBoard = () => {
  const [column, setColumn] = useState([]);

  const createColumn = () => {
    const newColumn = new Column('TODO');

    setColumn([...column, newColumn]);
  };

  const deleteColumn = (id) => {
    const filteredColumn = column.filter((col) => col.id !== id);
    setColumn(filteredColumn);
  };

  return (
    <div className='mt-4'>
      <div className={`flex ${column.length === 0 ? 'gap-0' : 'gap-3'}`}>
        <div className='flex gap-3'>
          {column.map((col, index) => (
            <div key={index}>
              <ColumnContainer col={col} deleteColumn={deleteColumn}/>
            </div>
          ))}
        </div>
        <Button onClick={createColumn}>
          <PlusCircle className='mr-2'/> Create new column
        </Button>
      </div>
    </div>
  );
};
