import React, { useEffect, useState } from 'react';

const WaitTimeStatistics28 = () => {
  const [waitTimes, setWaitTimes] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000/store28/wait-times')
      .then(response => response.json())
      .then(data => setWaitTimes(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Wait Time Statistics for Store 28</h2>
      <ul>
        <li>Average: {waitTimes.average !== undefined ? waitTimes.average.toFixed(2) : 'N/A'}</li>
        <li>Median: {waitTimes.median !== undefined ? waitTimes.median.toFixed(2) : 'N/A'}</li>
        <li>Standard Deviation: {waitTimes.std_dev !== undefined ? waitTimes.std_dev.toFixed(2) : 'N/A'}</li>
        <p>The average wait time is approximately {waitTimes.average !== undefined ? waitTimes.average.toFixed(2) : 'N/A'} seconds, with a standard deviation of {waitTimes.std_dev !== undefined ? waitTimes.std_dev.toFixed(2) : 'N/A'} seconds. This indicates that this store has the highest variability in the wait times, with some customers waiting significantly longer than others.
          The median wait time is {waitTimes.median !== undefined ? waitTimes.median.toFixed(2) : 'N/A'} seconds, which suggests that the distribution of wait times is somewhat skewed, with some longer wait times pulling the average higher than the median. The average wait time at this store is highest of all stores.</p>
      </ul>
    </div>
  );
};

export default WaitTimeStatistics28;
