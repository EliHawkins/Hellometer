import React, { useEffect, useState } from 'react';

const BusiestHoursChart = () => {
  const [busiestHours, setBusiestHours] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:5000/busiest-hours')
      .then(response => response.json())
      .then(data => setBusiestHours(data.busiest_hours))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Busiest Hours of the Day</h2>
      <ul>
        {busiestHours.map(hour => (
          <li key={hour}>{`${hour}:00 - ${hour + 1}:00`}</li>
        ))}
      </ul>
    </div>
  );
};

export default BusiestHoursChart;
