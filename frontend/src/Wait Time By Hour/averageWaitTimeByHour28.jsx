import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const AverageWaitTimeByHourChart28 = () => {
  const [averageWaitTimeByHour, setAverageWaitTimeByHour] = useState({});
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/store28/average-wait-time-by-hour')
      .then(response => response.json())
      .then(data => setAverageWaitTimeByHour(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (Object.keys(averageWaitTimeByHour).length > 0) {
      if (chartInstance) {
        chartInstance.destroy();
      }
      const ctx = document.getElementById('averageWaitTimeByHourChart');
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: Object.keys(averageWaitTimeByHour).map(hour => `${hour}:00`),
          datasets: [{
            label: 'Average Wait Time by Hour of the Day',
            data: Object.values(averageWaitTimeByHour),
            fill: false,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
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
  }, [averageWaitTimeByHour]);

  return (
    <div>
      <h2>Average Wait Time by Hour of the Day Chart for Store 28</h2>
      <canvas id="averageWaitTimeByHourChart" width="400" height="400"></canvas>
    </div>
  );
};

export default AverageWaitTimeByHourChart28;
