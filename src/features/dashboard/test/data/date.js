import dayjs from 'dayjs';

export const generateDate = (
    month = dayjs().month(),
    year = dayjs().year(),
) => {
  const firstDayOfMonth = dayjs().year(year).month(month).startOf('month');
  const lastDayOfMonth = dayjs().year(year).month(month).endOf('month');

  const arrayOfDate = [];

  for (let i = 0; i < firstDayOfMonth.day(); i++) {
    arrayOfDate.push(firstDayOfMonth.day(i));
  }

  for (let i = firstDayOfMonth.date(); i < lastDayOfMonth.date(); i++) {
    arrayOfDate.push(firstDayOfMonth.date(i));
  }

  const remaining = 43 - arrayOfDate.length;

  for (let i = lastDayOfMonth.date() + 1; i < lastDayOfMonth.date() + remaining; i ++) {
    arrayOfDate.push(firstDayOfMonth.date(i));
  }

  return 'Hello';
};
