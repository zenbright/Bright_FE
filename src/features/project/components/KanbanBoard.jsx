import {Button} from '@/components/ui/button';
import {PlusCircle} from 'lucide-react';
import {useState} from 'react';
import {Column} from '../utils/ColumnClass';
import {ColumnContainer} from './ColumnContainer';

export const KanbanBoard = () => {
  const [column, setColumn] = useState([]);

  console.log(column);

  const createColumn = () => {
    const newColumn = new Column('Hello');

    setColumn([...column, newColumn]);
  };

  return (
    <div className='mt-5'>
      <div className='flex gap-3'>
        <div className='flex gap-3'>
          {column.map((col, index) => (
            <div key={index}>
              <ColumnContainer col={col} />
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
