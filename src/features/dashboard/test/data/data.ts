export const weekData = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [{
    labels: 'Your Contribution',
    data: [2, 4, 3, 5, 7, 4, 2],
    backgroundColor: '#adfa1c',
  }],
};

export const yearData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', "December"],
  datasets: [{
    labels: 'Your Contribution',
    data: [14, 21, 62, 40, 50, 42, 31, 56 , 28, 32, 37, 48],
    backgroundColor: '#adfa1c',
  }],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
