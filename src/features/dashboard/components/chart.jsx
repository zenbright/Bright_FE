import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {data} from '../test/data/data';
import {options} from '../test/data/data';

ChartJS.register(
    LineElement,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
);

function Chart() {
  return (
    <div className='my-5'>
      <Line data={data} options={options} height={350}/>
    </div>
  );
}

export default Chart;
