import React, { useState } from 'react';
import WaitTimeChart from './waitTime.jsx';
import TotalTimesStats from './totalTimes.jsx';
import OrderPaymentTimesChart from './orderPaymentTimes.jsx';
import BusiestHoursChart from './busiestHours.jsx';
import AverageWaitTimeByHourChart from './averageWaitTimeByHour.jsx';
import AveragePaymentTimeByHourChart from './averagePaymentTimeByHour.jsx';

const App = () => {
  return (
    <div>
      <h1>Hellometer Data Analysis</h1>
      <WaitTimeChart/>
      <TotalTimesStats/>
      <OrderPaymentTimesChart/>
      <BusiestHoursChart/>
      <AverageWaitTimeByHourChart/>
      <AveragePaymentTimeByHourChart/>
    </div>
  );
};

export default App;