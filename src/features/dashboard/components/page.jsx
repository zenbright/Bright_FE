import { useEffect, useState } from 'react';

import { Calendar } from './calendar';
import CardContainer from './card-container';
import Chart from './chart';

function Dashboard() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const currentHour = currentTime.getHours();
  const user = 'Kien';
  const greeting =
    currentHour < 12
      ? `Good Morning, ${user}`
      : currentHour < 18
        ? `Good Afternoon, ${user}`
        : `Good Evening, ${user}`;

  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const dateFormatted = currentTime.toLocaleDateString(undefined, options);
  return (
    <div className="flex h-full w-full">
      {/* Section 1 */}
      <div className="relative w-9/12 p-4 flex flex-col gap-4 h-screen">
        <div className="space-y-2 mt-4">
          <p>{dateFormatted}</p>
          <p className="text-2xl font-semibold">{greeting}</p>
        </div>

        <div className=" place-content-center rounded-md">
          <div className="flex place-content-center w-full">
            <CardContainer />
          </div>
        </div>

        <div className="mt-auto pb-2">
          <Chart />
        </div>
      </div>

      {/* Section 2 */}
      <div className="w-3/12 h-screen bg-white border-[1px] my-1 mr-2 rounded-md">
        <Calendar />
      </div>
    </div>
  );
}

export default Dashboard;
