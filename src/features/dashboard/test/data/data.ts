export const weekData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [{
    labels: 'Your Contribution',
    data: [2, 4, 3, 5, 7, 4, 2],
    backgroundColor: 'rgb(225,0,113)',
    borderColor: "rgba(225,0,113)",
    pointBackgroundColor: 'rgb(225,0,113)',
    fill: {
      target: "origin", // 3. Set the fill options
      above: ({chart: {ctx}}) => {
        const bg = ctx.createLinearGradient(0, 0, 0, 300);
        bg.addColorStop(0, "#FF64B2");
        bg.addColorStop(1, "white");
        return bg;
      }
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
      beginAtZero: true,
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
