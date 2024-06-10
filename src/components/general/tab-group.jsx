import { FileSpreadsheet, GanttChartSquare, KanbanSquare } from 'lucide-react';
import PropTypes from 'prop-types';

const TableNames = [
  { name: 'Board', icon: KanbanSquare },
  { name: 'Timeline', icon: GanttChartSquare },
  { name: 'Sheet', icon: FileSpreadsheet },
];

const TabGroup = ({
  tableNames = TableNames,
  setIsUnderDevDialogOpen,
  selected,
  setSelected,
}) => {
  const handleButtonClick = buttonIndex => {
    // if (buttonIndex !== 0) {
    //   setIsUnderDevDialogOpen(true);
    //   return;
    // }
    setSelected(buttonIndex);
  };

  return (
    <div className="flex gap-4 text-sm">
      {tableNames.map((table, index) => (
        <button
          key={index}
          className={`flex py-3 hover:bg-slate-100/80 hover:rounded-lg px-2 gap-2 text-md font-semibold items-center
            ${
              selected === index
                ? 'text-yellow-500/80 bg-slate-100/30 rounded-md'
                : ' text-black/50'
            }`}
          onClick={() => handleButtonClick(index)}
        >
          {table.icon && <table.icon className="h-5 w-5" />}

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
