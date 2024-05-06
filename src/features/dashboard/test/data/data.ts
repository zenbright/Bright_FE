export const options = {
  responsive: true,
  maintainAspectRatio: false,
  barThickness: 38,
  plugins: {
    datalabel: {
      display: false,
    },
    legend: false,
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: false,
        drawOnChartArea: false,
      },
    },
    y: {
      beginAtZero: true,
      ticks: {
        display: false
      },
      border: {
        display: false,
      },
      grid: {
        display: false,
        drawOnChartArea: false,
      }
    }
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
  labels,
  datasets: [
    {
      data: [14, 21, 62, 40, 50, 42, 31, 56, 28, 32, 37, 48],
      // backgroundColor: '#adfa1c',
      backgroundColor: '#000000',
      borderRadius: 7,
    },
  ],
};
