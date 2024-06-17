import dayjs from 'dayjs';
import {generateDate} from '../test/data/date';
import cn from '../util/cn';
import {useState} from 'react';
import {months} from '../test/data/month';
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';
import {events} from '../test/data/event';
import EventDetail from './event_detail';
import {CalendarX2} from 'lucide-react';

export const Calendar = () => {
  const dateInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const getEventsForDate = (date) => {
    return events.filter((event) => dayjs(event.dueTo).isSame(date, 'day'));
  };

  const renderEventDots = (date) => {
    const eventList = getEventsForDate(date);

    const sortedEvents = eventList.sort((a, b) => {
      return dayjs(a.dueTo).diff(dayjs(b.dueTo));
    });

    const maxDots = 3;
    const dotsToShow = Math.min(sortedEvents.length, maxDots);
    const dots = [];

    for (let i = 0; i < dotsToShow; i++) {
      dots.push(
          <span
            key={i}
            className={cn(
                'w-1 h-1 rounded-full mb-2 mr-1',
            selectDate.toDate().toDateString() === date.toDate().toDateString() ? 'bg-white' : '',
            )}
            style={{backgroundColor: sortedEvents[i].color}}
          />,
      );
    }

    if (sortedEvents.length > maxDots) {
      dots.push(
          <span
            key={'more'}
            className={cn(
                'w-1 h-1 rounded-full mb-2 mr-1',
            selectDate.toDate().toDateString() === date.toDate().toDateString() ? 'bg-white' : '',
            )}
          >
          +{sortedEvents.length - maxDots}
          </span>,
      );
    }

    return dots;
  };

  const hasEvents = (date) => {
    return events.some((event) => dayjs(event.dueTo).isSame(date, 'day'));
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
            <div key={index} className="h-10 border-t grid place-content-center text-sm group">
              <h1
                className={cn(
                  currentMonth ? '' : 'text-gray-400',
                  today ? 'border border-red-500 text-red-500' : '',
                  selectDate.toDate().toDateString() === date.toDate().toDateString() ? 'border-black border text-black' : '',
                  'h-8 w-8 grid place-content-center rounded-lg group-hover:border group-hover:border-black group-hover:bg-black group-hover:text-white transition-all cursor-pointer',
                )}
                onClick={() => setSelectDate(date)}
              >
                {date.date()}
              </h1>
              {hasEvents(date) &&
                <div className='flex justify-center items-center'>
                  <div className='absolute pl-1 mb-0.5'>
                    <div className='flex'>
                      {renderEventDots(date)}
                    </div>
                  </div>
                </div>
              }
            </div>
          ))}
        </div>
      </div>
      <div className="h-fit w-full mt-4 px-3">
        <div className='flex justify-center items-center mb-2'>
          <h1 className="font-semibold">{selectDate.format('dddd MMMM D YYYY')}</h1>
        </div>
        <div className='w-full flex flex-col gap-2 max-h-52 overflow-auto no-scrollbar'>
          {getEventsForDate(selectDate).length > 0 ? (
            getEventsForDate(selectDate).map((event, index) => (
              <EventDetail
                name={event.name}
                endDate={event.dueTo}
                description={event.description}
                color={event.color}
                startDate={event.startDate}
                value={event.value}
                key={index}
              />
            ))
          ) : (
            <div className="flex flex-col justify-center items-center">
              <div className='w-[80%] flex flex-col justify-center items-center'>
                <CalendarX2 className='w-20 h-20 opacity-25 stroke-1' />
                <p className=' mt-3 text-center font-semibold opacity-50'>Oops! Look like no events for this date</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
