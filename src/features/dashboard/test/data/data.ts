export const weekData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [{
    labels: 'Your Contribution',
    data: [4, 1, 2, 10, 5, 12, 1],
    backgroundColor: 'aqua',
    borderColor: "rgb(255, 99, 132)",
    pointBackgroundColor: 'red',
    fill: {
      target: "origin", // 3. Set the fill options
      above: "rgba(255, 0, 0, 0.3)"
    }
  }],
};

export const yearData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"],
  datasets: [{
    labels: 'Your Contribution',
    data: [14, 21, 62, 40, 50, 42, 31, 56 , 28, 32, 37, 48],
    backgroundColor: 'aqua',
    borderColor: "rgb(255, 99, 132)",
    pointBackgroundColor: 'red',
    fill: {
      target: "origin", // 3. Set the fill options
      above: "rgba(255, 0, 0, 0.3)"
    }
  }],
};

export const options = {
  tension: 0.3,
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
