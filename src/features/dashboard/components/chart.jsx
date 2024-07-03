import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

import { data1, data2, data3, options } from '../test/data/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const [selectedData, setSelectedData] = useState('data1');

  const getData = () => {
    switch (selectedData) {
      case 'data2':
        return data2;
      case 'data3':
        return data3;
      default:
        return data1;
    }
  };

  return (
    <div className='border border-grey p-4 rounded-md'>
      <div className="flex justify-between items-center mb-6">
        <div className='text-lg font-semibold'>
          {selectedData === 'data1' ? 'Project 1' : selectedData === 'data2' ? 'Project 2' : 'Project 3'}
        </div>
        <div className="flex bg-gray-200 h-7 rounded-md gap-2 cursor-pointer">
          <div
            onClick={() => setSelectedData('data1')}
            className={`px-4 py-2 text-sm flex items-center rounded ${selectedData === 'data1' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {'Project 1'}
          </div>
          <div
            onClick={() => setSelectedData('data2')}
            className={`px-3 py-1 text-sm flex items-center rounded ${selectedData === 'data2' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {'Project 2'}
          </div>
          <div
            onClick={() => setSelectedData('data3')}
            className={`px-3 py-1 text-sm flex items-center rounded ${selectedData === 'data3' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {'Project 3'}
          </div>
        </div>
      </div>
      <div className=" h-96">
        <Bar options={options} data={getData()} />
      </div>
    </div>
  );
}

export default Chart;
