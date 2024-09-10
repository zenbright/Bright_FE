import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {BoardTabContextMenu} from '../../features/project/components/ContextMenu';

const TabGroup = ({tableNames}) => {
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div className='flex gap-10 mt-2'>
      {tableNames.map((tableName, index) => (
        <button
          key={index}
          className={
            `text-left overflow-hidden text-ellipsis whitespace-nowrap transition-all duration-75 font-semibold
            ${selectedButton === index ? 'text-blue-700 border-blue-700' : ''}`
          }
          style={{maxWidth: '20rem', boxSizing: 'content-box', boxShadow: selectedButton === index ? '0 1px 0 blue' : 'none'}}

          onClick={() => handleButtonClick(index)}
        >
          {tableName}
        </button>
      ))}
    </div>
  );
};

TabGroup.propTypes = {
  tableNames: PropTypes.arrayOf(PropTypes.string),
};

export default TabGroup;
