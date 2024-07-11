import { Button } from '@/components/ui/button';
import { FileSpreadsheet, GanttChartSquare, KanbanSquare } from 'lucide-react';
import PropTypes from 'prop-types';

const TableNames = [
  { name: 'Board', icon: KanbanSquare, isDisabled: false },
  { name: 'Sketch', icon: GanttChartSquare, isDisabled: true },
  { name: 'Sheet', icon: FileSpreadsheet, isDisabled: true },
];

const TabGroup = ({ tableNames = TableNames, selected, setSelected }) => {
  const handleButtonClick = buttonIndex => {
    setSelected(buttonIndex);
  };

  return (
    <div className="flex gap-4 text-sm">
      {tableNames.map((table, index) => (
        <Button
          key={index}
          className={`flex py-3 px-2 gap-2 text-md font-semibold items-center hover:text-background hover:bg-foreground/95 ${selected === index ? 'bg-tab_group' : ''}`}
          disabled={table.isDisabled}
          variant="ghost"
          onClick={() => handleButtonClick(index)}
        >
          {table.icon && <table.icon className="h-5 w-5" />}

          <div>{table.name}</div>
        </Button>
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
