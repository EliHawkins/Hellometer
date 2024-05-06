import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const AveragePaymentTimeByHourChart98 = () => {
  const [averagePaymentTimeByHour, setAveragePaymentTimeByHour] = useState({});
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/store98/average-payment-time-by-hour')
      .then(response => response.json())
      .then(data => setAveragePaymentTimeByHour(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (Object.keys(averagePaymentTimeByHour).length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const ctx = document.getElementById('averagePaymentTimeByHourChart');
      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: Object.keys(averagePaymentTimeByHour),
          datasets: [{
            label: 'Average Time Taken to Pay by Hour of the Day',
            data: Object.values(averagePaymentTimeByHour),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      setChartInstance(newChartInstance);
    }
  }, [averagePaymentTimeByHour]);

  return (
    <div>
      <h2>Average Payment Time by Hour of the Day Chart for Store 98</h2>
      <canvas id="averagePaymentTimeByHourChart" width="400" height="400"></canvas>
    </div>
  );
};

export default AveragePaymentTimeByHourChart98;
