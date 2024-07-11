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
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../../features/theme/utils/themeSlice.ts';

function Chart() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.currentTheme.value);

  const [selectedData, setSelectedData] = useState('data1');
  const [theme, setTheme] = useState(currentTheme); 


  const getData = () => {
    let data;
    switch (selectedData) {
      case 'data2':
        data =  data2;
      case 'data3':
        data = data3;
      default:
        data = data1;
    }
    const bgColor = theme === 'light-default' ? '#000000' : '#adfa1c';
    data.datasets[0].backgroundColor = bgColor;
    return data;
  };

  return (
    <div className='border border-grey p-4 rounded-md mb-2'>
      <div className="flex justify-between items-center mb-6">
        <div className='text-lg font-semibold'>
          {selectedData === 'data1' ? 'Project 1' : selectedData === 'data2' ? 'Project 2' : 'Project 3'}
        </div>
        <div className="flex bg-gray-100 h-9 rounded-md gap-2 cursor-pointer">
          <div
            onClick={() => setSelectedData('data1')}
            className={`font-semibold m-1 px-4 py-2 text-sm flex items-center rounded ${selectedData === 'data1' ? 'bg-black text-white' : 'text-background bg-gray-100 hover:bg-gray-200'}`}
          >
            {'Project 1'}
          </div>
          <div
            onClick={() => setSelectedData('data2')}
            className={`font-semibold m-1 px-3 py-1 text-sm flex items-center rounded ${selectedData === 'data2' ? 'bg-black text-foreground' : 'text-background bg-gray-100 hover:bg-gray-200'}`}
          >
            {'Project 2'}
          </div>
          <div
            onClick={() => setSelectedData('data3')}
            className={`font-semibold m-1 px-3 py-1 text-sm flex items-center rounded ${selectedData === 'data3' ? 'bg-black text-white' : 'text-background bg-gray-100 hover:bg-gray-200'}`}
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
