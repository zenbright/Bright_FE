import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PropTypes from 'prop-types';

function EventDetail({ name, endDate, description, color, startDate, value }) {
  const formatDate = dateTimeString => {
    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const formattedTime = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    return `${formattedDate} at ${formattedTime}`;
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="h-14">
        <div className="flex items-start justify-start rounded-xl border bg-background h-14 cursor-pointer hover:bg-slate-100/95">
          <div
            className="w-[3%] h-14 rounded-s-xl"
            style={{ backgroundColor: color }}
          />
          <div className="flex flex-col justify-center pl-2 pr-4 p-1 h-full">
            <div className="flex justify-center items-center gap-1">
              <p className="font-semibold text-md text-foreground">{name}</p>
              <p style={{ color: color }} className="text-sm">
                {' '}
                |{' '}
              </p>
              <p style={{ color: color }} className="text-sm pt-0.5">
                {value}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p
                className="text-sm ml-2 text-slate-500 pt-0.5"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                {formatDate(endDate)}
              </p>
            </div>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{'Task Specific'}</DialogTitle>
          <DialogDescription>
            {'Make changes to your profile here. Click save when you`re done.'}
          </DialogDescription>
        </DialogHeader>
        <h1>{'This will hold your task detail'}</h1>
      </DialogContent>
    </Dialog>
  );
}

EventDetail.propTypes = {
  name: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  startDate: PropTypes.string,
  value: PropTypes.string,
};

export default EventDetail;
