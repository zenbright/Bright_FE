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
import { Check, ChevronsUpDown, Pencil, Plus } from 'lucide-react';
import PropTypes from 'prop-types';
import * as React from 'react';
import { useState } from 'react';

import { DEFAULT_TASK_TAGS } from '../../features/project/assets/values';

export const CreatableMultiSelectDropdown = ({
  items = DEFAULT_TASK_TAGS,
  selectedItemList,
  onSelectItem,
  onAddMoreItem,
}) => {
  const [open, setOpen] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');

  const parseItemId = selectedItemsString => {
    return selectedItemsString.split('?')[0];
  };

  return (
    <div className="flex items-center">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {selectedItemList.length > 0 ? (
              <div className="flex overflow-hidden gap-2">
                {selectedItemList.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div
                      className="w-2 h-2 mr-2 rounded-full"
                      style={{
                        background: `${items[parseItemId(item)].color}`,
                      }}
                    />
                    {items[parseItemId(item)].title}{' '}
                    {index !== selectedItemList.length - 1 && ','}
                  </div>
                ))}
              </div>
            ) : (
              <span className="opacity-50">{'Select tags...'}</span>
            )}

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
                <Pencil className="h-3 w-3 mr-4" /> Add &apos;{searchPhrase}
                &apos;
              </div>
            </CommandEmpty>

            <CommandGroup>
              {Object.keys(items).map(key => (
                <CommandItem
                  key={items[key].title}
                  value={`${key}?color=${items[key].color}`}
                  onSelect={currentValue => {
                    currentValue += `?title=${items[key].title}`;
                    onSelectItem(
                      selectedItemList.includes(currentValue)
                        ? selectedItemList.filter(
                            item => parseItemId(item) !== key
                          )
                        : [...selectedItemList, currentValue]
                    );
                  }}
                >
                  {/* Selected mark */}
                  <Check
                    className={`mr-2 h-4 w-4 ${selectedItemList.some(item => item.startsWith(`${key}?color=`)) ? 'opacity-100' : 'opacity-0'}`}
                  />

                  {/* Tag Color Dot */}
                  {items[key].color && (
                    <div
                      className={`w-2 h-2 mr-3 rounded-full`}
                      style={{ background: `${items[key].color}` }}
                    />
                  )}

                  {/* Title */}
                  {items[key].title}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

      {selectedItemList.length > 0 && (
        <div className="flex items-center text-gray-500 text-sm ml-2">
          {' '}
          <Plus className="w-3 h-3" /> {selectedItemList.length}
        </div>
      )}
    </div>
  );
};

CreatableMultiSelectDropdown.propTypes = {
  onSelectItem: PropTypes.func,
  selectedItemList: PropTypes.array,
};
