import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {KanbanSquare, GanttChartSquare, Grid2X2} from 'lucide-react';

const TableNames = [
  {name: 'Board', icon: KanbanSquare},
  {name: 'Timeline', icon: GanttChartSquare},
  {name: 'Table', icon: Grid2X2},
];

const TabGroup = ({tableNames = TableNames}) => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div className='flex gap-6'>
      {tableNames.map((table, index) => (

        <button
          key={index}
          className={
            `flex gap-2 text-left overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-75 py-1 items-center font-semibold
            ${selectedButton === index ? 'text-blue-700 border-blue-700' : ''}`
          }
          style={{maxWidth: '20rem', boxSizing: 'content-box', boxShadow: selectedButton === index ? '0 1px 0 blue' : 'none'}}

          onClick={() => handleButtonClick(index)}
        >
          <table.icon className='w-5 h-5' />
          <div>{table.name}</div>
        </button>
      ))}
    </div>
  );
};

TabGroup.propTypes = {
  tableNames: PropTypes.arrayOf(PropTypes.string),

};

export default TabGroup;
