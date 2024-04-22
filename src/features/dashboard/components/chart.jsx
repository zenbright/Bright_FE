import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {data, options} from '../test/data/data';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

function Chart() {
  return (
    <div className='h-96 border-[1px] border-grey rounded-md mt-3 p-3'>
      <Bar options={options} data={data}/>
    </div>
  );
}

export default Chart;
