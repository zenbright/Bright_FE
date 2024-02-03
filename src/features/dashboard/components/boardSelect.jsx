import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Plus} from 'lucide-react';
import {Button} from '@/components/ui/button';

const sampleTableNames = ['Production', 'Development', 'Jan', 'Test'];

const ButtonGroup = ({tableNames = sampleTableNames}) => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonIndex) => {
    setSelectedButton(buttonIndex);
  };

  return (
    <div className='flex gap-10 mt-3'>
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

      <Button variant="outline" size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
};

ButtonGroup.propTypes = {
  tableNames: PropTypes.arrayOf(PropTypes.string),

};

export default ButtonGroup;
