import dayjs from 'dayjs';
import {generateDate} from '../test/data/date';
import cn from '../util/cn';
import {useState} from 'react';
import {months} from '../test/data/month';
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {events} from '../test/data/event';
import EventDetail from './event_detail';

export const Calendar = () => {
  const dateInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  // Function to check if there are events on a given date
  const hasEvents = (date) => {
    return events.some((event) => dayjs(event.dueTo).isSame(date, 'day'));
  };

  // Function to get events for the selected date
  const getEventsForDate = (date) => {
    return events.filter((event) => dayjs(event.dueTo).isSame(date, 'day'));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-[80%] h-full flex flex-col justify-start">
        <div className="w-full flex justify-between mb-2 mt-2">
          <h1 className="font-bold">{months[today.month()]}, {today.year()}</h1>
          <div className="flex items-center justify-center gap-2">
            <GrFormPrevious
              className="text-xl cursor-pointer"
              onClick={() => setToday(today.subtract(1, 'month'))}
            />
            <h1
              className="cursor-pointer"
              onClick={() => setToday(currentDate)}
            >
              Today
            </h1>
            <GrFormNext
              className="text-xl cursor-pointer"
              onClick={() => setToday(today.add(1, 'month'))}
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-7">
          {dateInWeek.map((date, index) => (
            <div key={index} className="h-8 grid place-content-center text-sm font-semibold">
              <h1>{date}</h1>
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-7">
          {generateDate(today.month(), today.year()).map(({date, currentMonth, today}, index) => (
            <div key={index} className="h-9 border-t grid place-content-center text-sm group">
              <h1
                className={cn(
                  currentMonth ? '' : 'text-gray-400',
                  today ? 'bg-red-500 text-white' : '',
                  selectDate.toDate().toDateString() === date.toDate().toDateString() ? 'bg-black text-white' : '',
                  'h-7 w-7 grid place-content-center rounded-full group-hover:bg-black group-hover:text-white transition-all cursor-pointer',
                )}
                onClick={() => setSelectDate(date)}
              >
                {date.date()}
              </h1>
              <div className='flex justify-center items-center'>
                {hasEvents(date) &&
                  <span
                    className={cn(
                      selectDate.toDate().toDateString() === date.toDate().toDateString() ? 'bg-white' : '',
                      'absolute w-1 h-1 bg-red-500 rounded-full mb-2 group-hover:bg-white',
                    )}
                  />}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-fit w-full mt-4 overflow-auto px-3">
        <div className='flex justify-center items-center mb-2'>
          <h1 className="font-semibold">Schedule for {selectDate.toDate().toDateString()}</h1>
        </div>
        <div className='w-full flex flex-col gap-2 h-full'>
          {getEventsForDate(selectDate).map((event, index) => (
            <EventDetail name={event.name} dueTo={event.dueTo} description={event.description} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
