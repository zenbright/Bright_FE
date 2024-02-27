import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import PropTypes from 'prop-types';
import {Task} from '../../utils/class';

export const DetailedTaskView = ({isShowTaskDetailed, setIsShowTaskDetailed, task}) => {
  return (
    <Sheet open={isShowTaskDetailed} onOpenChange={setIsShowTaskDetailed} >
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <Button onClick={() => setIsShowTaskDetailed(false)}>Save changes</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

DetailedTaskView.propTypes = {
  isShowTaskDetailed: PropTypes.bool,
  setIsShowTaskDetailed: PropTypes.func,
  task: PropTypes.instanceOf(Task),
};
