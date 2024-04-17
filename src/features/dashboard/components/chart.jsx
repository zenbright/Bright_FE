import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {weekData} from '../test/data/data';
import {yearData} from '../test/data/data';
import {options} from '../test/data/data';
import {useState} from 'react';

ChartJS.register(
    LineElement,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Filler,
);

function Chart() {
  const [selectedOption, setSelectedOption] = useState('week');
  const [chartData, setChartData] = useState(weekData);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    // Update chart data based on selected option
    switch (event.target.value) {
      case 'week':
        setChartData(weekData);
        break;
      case 'year':
        setChartData(yearData);
        break;
      default:
        break;
    }
  };
  return (
    <div className='border-[1px] p-5 border-grey mt-6 rounded-sm'>
      <div className='flex w-full px-4 justify-between'>
        <div></div>
        <select value={selectedOption} onChange={handleChange} className='p-1 border-[1px] rounded-sm w-[80px]'>
          <option value="week" >Week</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div className='mb-1 mt-4'>
        <Line data={chartData} options={options} height={280}/>
      </div>
    </div>
  );
}

export default Chart;
