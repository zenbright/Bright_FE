import {Column} from '../utils/ColumnClass';
import PropTypes from 'prop-types';
import {ListTodo, Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {ColumnDropdownMenu} from './DropDownMenu';

export function ColumnContainer({col}) {
  return (
    <div className='w-80 h-auto max-h-80 overflow-scroll no-scrollba text-black rounded-md shadow-sm'>
      <Button className='bg-white text-black hover:bg-white w-72 flex justify-between'>
        <div className='flex items-center'>
          <ListTodo className='mr-2'/> {col.title} ({20})
        </div>
        <div className='flex items-center'>
          <Plus className='mr-2 hover:bg-slate-200 hover:rounded-full'/>

          <ColumnDropdownMenu />
        </div>
      </Button>
    </div>
  );
}

ColumnContainer.propTypes = {
  col: PropTypes.instanceOf(Column),
};
