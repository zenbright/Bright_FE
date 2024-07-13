import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { BarChart } from 'lucide-react';
import { RefreshCw } from 'lucide-react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';

import {
  chart_dark_bg,
  chart_light_bg,
  data1,
  data2,
  data3,
  options,
} from '../test/data/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart() {
  const currentTheme = useSelector(state => state.currentTheme.value);
  const [spinning, setSpinning] = useState(true);

  // This code simply used to simulate a loading spinner
  useEffect(() => {
    const timer = setTimeout(() => {
      setSpinning(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [spinning]);

  return (
    <div className="h-full">
      <Tabs
        defaultValue="bright"
        className="flex flex-col w-full relative h-full"
      >
        <div className="flex items-center gap-1">
          {'Recent Activities'}
          <Button
            onClick={() => setSpinning(true)}
            className="flex gap-2"
            variant="ghost"
          >
            <RefreshCw className={`h-4 ${spinning ? 'animate-spin' : ''}`} />
          </Button>
        </div>

        <TabsList className="absolute right-0">
          <TabsTrigger value="bright">{'Bright'}</TabsTrigger>
          <TabsTrigger value="prismm">{'Prismmm'}</TabsTrigger>
          <TabsTrigger value="grokai">{'Grokai'}</TabsTrigger>
        </TabsList>

        <TabsContent value="bright" className="h-full">
          <Bar
            options={options}
            data={{
              ...data1,
              datasets: [
                {
                  ...data1.datasets[0],
                  backgroundColor:
                    currentTheme === 'light-default'
                      ? chart_light_bg
                      : chart_dark_bg,
                },
              ],
            }}
          />
        </TabsContent>

        <TabsContent value="prismm" className="h-full">
          <Bar
            options={options}
            data={{
              ...data2,
              datasets: [
                {
                  ...data2.datasets[0],
                  backgroundColor:
                    currentTheme === 'light-default'
                      ? chart_light_bg
                      : chart_dark_bg,
                },
              ],
            }}
          />
        </TabsContent>

        <TabsContent value="grokai" className="h-full">
          <div className="flex flex-col items-center h-full justify-center gap-8 text-2xl font-semibold">
            <BarChart size={64} />
            <div>{'No data available'}</div>
            <Button onClick={() => setSpinning(true)} className="flex gap-2">
              {'Refresh'}
              <RefreshCw className={`h-4 ${spinning ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Chart;
