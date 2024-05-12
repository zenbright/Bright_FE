import dayjs from 'dayjs';
import {generateDate} from '../test/data/date';
import cn from '../util/cn';
import {useState} from 'react';
import {months} from '../test/data/month';
import {GrFormPrevious, GrFormNext} from 'react-icons/gr';

export const Calendar = () => {
  const dateInWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);
  return (
    <div className='w-full h-full'>
      <div className='flex justify-between mb-2 mt-2'>
        <h1 className='font-bold'>{months[today.month() - 1]}, {today.year()}</h1>
        <div className='flex items-center justify-center gap-2'>
          <GrFormPrevious
            className='text-xl cursor-pointer'
            onClick={() => setToday(today.subtract(1, 'month'))}
          />
          <h1
            className='cursor-pointer' onClick={() => setToday(currentDate)}
          >
            Today
          </h1>
          <GrFormNext
            className='text-xl cursor-pointer'
            onClick={() => setToday(today.add(1, 'month'))}
          />
        </div>
      </div>
      <div className='w-full grid grid-cols-7'>
        {dateInWeek.map((date, index) => {
          return (
            <div key={index} className='h-10 grid place-content-center text-sm font-semibold'>
              <h1>{date}</h1>
            </div>
          );
        })}
      </div>
      <div className='w-full grid grid-cols-7'>
        {generateDate(today.month(), today.year()).map(({date, currentMonth, today}, index) => {
          return (
            <div key={index} className='h-12 border-t grid place-content-center text-sm'>
              <h1
                className={
                  cn(
                    currentMonth ? '' : 'text-gray-400',
                    today ? 'bg-red-500 text-white' : '',
                    selectDate.toDate().toDateString() === date.toDate().toDateString() ? 'bg-black text-white' : '',
                    'h-9 w-9 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer',
                  )
                }
                onClick={() => setSelectDate(date)}
              >
                {date.date()}
              </h1>
            </div>
          );
        })}
      </div>
      <div className='h-fit w-full'>
        <h1 className='font-semibold'>Schedule for {selectDate.toDate().toDateString()}</h1>
        <p>No meeting for today</p>
      </div>
    </div>
  );
};

export default Calendar;
