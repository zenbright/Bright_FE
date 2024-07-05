import { Button } from '@/components/ui/button';
import { ColorPicker } from '@/components/ui/color-picker';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RefreshCw } from 'lucide-react';
import { useState } from 'react';

import { TASKTAG_CREATION_FORM } from '../../assets/strings';
import { neonColorCreator } from '../../utils/utils';

const randomDarkHexColor = () => {
  let color = '#';

  // Generate the RGB components
  for (let i = 0; i < 3; i++) {
    // Generate a random number between 10 and 127 (to ensure dark colors)
    let component = Math.floor(Math.random() * 118 + 10).toString(16);

    // Ensure the component has two digits
    color += component.length === 1 ? '0' + component : component;
  }

  color += 'ff';

  return color;
};

export const TaskTagCreationForm = ({
  isOpen = false,
  onOpenChange,
  labelTitle = 'hello',
  tagList,
  setTagList,
}) => {
  const [isOpenColorPicker, setIsOpenColorPicker] = useState(false);
  const [tagColor, setLabelColor] = useState(randomDarkHexColor());
  const [tagTitle, setLabelTitle] = useState(labelTitle);

  const onHandleSubmit = () => {
    const newTag = `${tagTitle}?color=${tagColor}?title=${tagTitle}`;

    setTagList([...tagList, newTag]);
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{TASKTAG_CREATION_FORM.TITLE}</DialogTitle>
          <DialogDescription>
            {TASKTAG_CREATION_FORM.DESCRIPTION}
          </DialogDescription>
        </DialogHeader>

        <div className="grid pt-3 py-2">
          <div className="grid grid-cols-4 items-center gap-4 mb-4">
            <Label htmlFor="name" className="text-left">
              {TASKTAG_CREATION_FORM.TAG_NAME}
            </Label>
            <Input
              id="name"
              value={tagTitle}
              className="col-span-3"
              onChange={e => setLabelTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center">
            <Label htmlFor="name" className="text-left">
              {TASKTAG_CREATION_FORM.COLOR}
            </Label>

            <div className="flex w-full col-span-3 items-center h-full gap-1">
              <Input
                type="text"
                value={tagColor}
                onChange={e => {
                  setLabelColor(e.target.value);
                  console.log(e.target.value);
                }}
              />

              <Button
                variant="outline"
                size="icon"
                className={`w-14`}
                onClick={() => setLabelColor(randomDarkHexColor())}
                style={{ backgroundColor: tagColor }}
              >
                <RefreshCw
                  className="h-4 w-4"
                  style={{ color: neonColorCreator(tagColor) }}
                />
              </Button>
            </div>

            <div className="w-full col-span-4 text-black/50 font-semibold text-sm mt-4 italic">
              {TASKTAG_CREATION_FORM.COLOR_CRITERIA}{' '}
            </div>
          </div>

          <div className="flex justify-end items-end relative pt-2">
            <div
              className="cursor-pointer hover:underline text-sm px-2 mt-1 rounded"
              onClick={() => setIsOpenColorPicker(true)}
            >
              {'More options'}
            </div>

            {isOpenColorPicker && (
              <ColorPicker
                isOpen={isOpenColorPicker}
                onOpenChange={setIsOpenColorPicker}
                color={tagColor}
                setColor={setLabelColor}
              />
            )}
          </div>
        </div>

        <DialogFooter>
          <Button type="submit" onClick={() => onHandleSubmit()}>
            {'Save changes'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};