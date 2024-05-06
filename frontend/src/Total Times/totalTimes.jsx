import React, { useEffect, useState } from 'react';

const TotalTimesStats = () => {
  const [totalTimes, setTotalTimes] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000/total-times')
      .then(response => response.json())
      .then(data => setTotalTimes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Total Time Statistics</h2>
      <ul>
        <li>Average: {totalTimes.average !== undefined ? totalTimes.average.toFixed(2) : 'N/A'}</li>
        <li>Median: {totalTimes.median !== undefined ? totalTimes.average.toFixed(2) : 'N/A'}</li>
        <li>Standard Deviation: {totalTimes.std_dev !== undefined ? totalTimes.std_dev.toFixed(2) : 'N/A'}</li>
        <p>The average total time spent by customers from arrival to leaving is approximately {totalTimes.average !== undefined ? totalTimes.average.toFixed(2) : 'N/A'} seconds, with a standard deviation of {totalTimes.std_dev !== undefined ? totalTimes.std_dev.toFixed(2) : 'N/A'} seconds. This includes time spent ordering, waiting, and paying.
          The median total time is {totalTimes.median !== undefined ? totalTimes.average.toFixed(2) : 'N/A'} seconds, which again suggests some variability in the total time spent by customers.</p>
      </ul>
    </div>
  );
};

export default TotalTimesStats;
