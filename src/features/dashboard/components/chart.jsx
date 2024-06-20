import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React from 'react';
import { Bar } from 'react-chartjs-2';

import { data, options } from '../test/data/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  return (
    <div className=" h-96 border border-grey rounded-md mt-3 p-2 pl-0.5">
      <Bar options={options} data={data} />
    </div>
  );
}

export default Chart;
