import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PropTypes from 'prop-types';
import {Calendar} from 'lucide-react';


function EventDetail({name, dueTo}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='px-2 py-1 flex flex-col items-start justify-start rounded-xl border bg-white h-14 cursor-pointer hover:bg-slate-200/95'>
          <p className='font-semibold text-md'>{name}</p>
          <div className='flex items-center gap-2'>
            <Calendar className='w-4 h-4 text-slate-500'/>
            <p className='text-sm text-slate-500 pt-0.5' style={{display: 'flex', alignItems: 'center'}}>{dueTo}</p>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you`re done.
          </DialogDescription>
        </DialogHeader>
        <div>
          <p>Hello Kien</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

EventDetail.propTypes = {
  name: PropTypes.string,
  dueTo: PropTypes.string,
};

export default EventDetail;
