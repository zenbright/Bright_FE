export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"],
  datasets: [{
    labels: 'Your Contribution',
    data: [0, 0, 2, 10, 5, 12, 1, 1 , 1, 2, 3, 8],
    backgroundColor: 'aqua',
    borderColor: 'black',
    pointBorderColor: 'aqua',
  }],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: false,
  },
  scales: {
    x: {
      ticks: {
        display: false
      },
      grid: {
        drawOnChartArea: false
      },
      border: {
        color: 'black',
      }
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        drawOnChartArea: false
      },
      border: {
        color: 'black',
      }
    },
  },
  elements: {
    line: {
        borderJoinStyle: 'miter'
    }
  }
};
