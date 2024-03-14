import {useState, useEffect} from 'react';
import CardContainer from './card-container';

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
  const greeting = currentHour < 12 ? `Good Morning, ${user}` : currentHour < 18 ? `Good Afternoon, ${user}` : `Good Evening, ${user}`;

  const options = {weekday: 'long', month: 'long', day: 'numeric'};
  const dateFormatted = currentTime.toLocaleDateString(undefined, options);
  return (
    <div className="flex h-screen w-screen">
      {/* Section 1 */}
      <div className="w-8/12 p-4">
        <div className='space-y-2'>
          <p>{dateFormatted}</p>
          <p className='text-3xl'>{greeting}</p>
        </div>
        <div className=' place-content-center mt-3 rounded-md'>
          <div className='flex place-content-center w-full'>
            <CardContainer/>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="w-4/12 bg-black">
        <p>Calendar here</p>
      </div>
    </div>
  );
}

export default Dashboard;
