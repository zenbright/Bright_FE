import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Check, ChevronsUpDown, Pencil } from 'lucide-react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';

import { DEFAULT_TASK_TAGS } from '../../features/project/assets/values';

export const CreatableMultiSelectDropdown = ({
  items = DEFAULT_TASK_TAGS,
  selectedItemList = [],
  onSelectItem,
  onAddMoreItem,
}) => {
  const [open, setOpen] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {'Select tags...'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput
            onValueChange={txt => setSearchPhrase(txt)}
            value={searchPhrase}
            onChange={e => setSearchPhrase(e.target.value)}
            placeholder="Search tags..."
          />
          <CommandEmpty className="m-1">
            <div
              className="flex items-center hover:bg-slate-300/25 hover:cursor-pointer py-1.5 px-2 text-sm rounded-sm w-full h-full"
              onClick={() => onAddMoreItem(searchPhrase)}
            >
              <Pencil className="h-3 w-3 mr-4" /> Add &apos;{searchPhrase}&apos;
            </div>
          </CommandEmpty>

          <CommandGroup>
            {Object.keys(items).map(key => (
              <CommandItem
                key={key}
                value={items[key].id}
                onSelect={currentValue => {
                  onSelectItem(
                    selectedItemList.includes(currentValue)
                      ? selectedItemList.filter(tag => tag !== currentValue)
                      : [...selectedItemList, currentValue]
                  );
                }}
              >
                {/* Selected mark */}
                <Check
                  className={`mr-2 h-4 w-4  ${selectedItemList.includes(items[key].id) ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Tag Color Dot */}
                <div
                  className={`w-2 h-2 mr-3 rounded-full`}
                  style={{ background: `${items[key].color}` }}
                />

                {/* Title */}
                {key}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

CreatableMultiSelectDropdown.propTypes = {
  onSelectItem: PropTypes.func,
  selectedItemList: PropTypes.array,
};
