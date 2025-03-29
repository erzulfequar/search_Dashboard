import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartDisplay = ({ data }) => {
  if (!Array.isArray(data)) {
    return <p>Result: {JSON.stringify(data)}</p>;
  }

  const chartData = {
    labels: data.map((item) => item.region || item.product),
    datasets: [
      {
        label: 'Sales / Revenue',
        data: data.map((item) => item.revenue || item.sales),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      }
    ]
  };

  return <Bar data={chartData} />;
};

export default ChartDisplay;
