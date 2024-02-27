import PropTypes from 'prop-types';
import {KanbanSquare, GanttChartSquare, FileSpreadsheet} from 'lucide-react';

const TableNames = [
  {name: 'Board', icon: KanbanSquare},
  {name: 'Timeline', icon: GanttChartSquare},
  {name: 'Sheet', icon: FileSpreadsheet},
];

const TabGroup = ({tableNames = TableNames, setIsUnderDevDialogOpen, selected, setSelected}) => {
  const handleButtonClick = (buttonIndex) => {
    // if (buttonIndex !== 0) {
    //   setIsUnderDevDialogOpen(true);
    //   return;
    // }
    setSelected(buttonIndex);
  };

  return (
    <div className='flex gap-7 text-sm'>
      {tableNames.map((table, index) => (
        <button
          key={index}
          className={
            `flex gap-2 transition-all duration-75 items-center font-bold py-1
            ${selected === index ? 'text-blue-700 border-blue-700' : ' text-black/80'}`
          }
          style={{maxWidth: '20rem', boxSizing: 'content-box', boxShadow: selected === index ? '0px 1px 0px 0px blue' : 'none'}}

          onClick={() => handleButtonClick(index)}
        >
          {table.icon && <table.icon className='h-5 w-5' /> }
          <div>{table.name}</div>
        </button>
      ))}
    </div>
  );
};

TabGroup.propTypes = {
  tableNames: PropTypes.arrayOf(PropTypes.object),
  setIsUnderDevDialogOpen: PropTypes.func,
  selected: PropTypes.number,
  setSelected: PropTypes.func,
};

export default TabGroup;
