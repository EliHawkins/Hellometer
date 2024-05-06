import React, { useState } from 'react';
import WaitTimeChart from './Wait Time Stats/waitTime.jsx';
import WaitTimeStatistics27 from './Wait Time Stats/waitTime27.jsx';
import WaitTimeStatistics28 from './Wait Time Stats/waitTime28.jsx';
import WaitTimeStatistics97 from './Wait Time Stats/waitTime97.jsx';
import WaitTimeStatistics98 from './Wait Time Stats/waitTime98.jsx';
import WaitTimeStatistics99 from './Wait Time Stats/waitTime99.jsx';
import TotalTimesStats from './Total Times/totalTimes.jsx';
import TotalTimesStats27 from './Total Times/totalTimes27.jsx';
import TotalTimesStats28 from './Total Times/totalTimes28.jsx';
import TotalTimesStats97 from './Total Times/totalTimes97.jsx';
import TotalTimesStats98 from './Total Times/totalTimes98.jsx';
import TotalTimesStats99 from './Total Times/totalTimes99.jsx';
import OrderPaymentTimesChart from './Order Payment Times/orderPaymentTimes.jsx';
import OrderPaymentTimesChart27 from './Order Payment Times/orderPaymentTimes27.jsx';
import OrderPaymentTimesChart28 from './Order Payment Times/orderPaymentTimes28.jsx';
import OrderPaymentTimesChart97 from './Order Payment Times/orderPaymentTimes97.jsx';
import OrderPaymentTimesChart98 from './Order Payment Times/orderPaymentTimes98.jsx';
import OrderPaymentTimesChart99 from './Order Payment Times/orderPaymentTimes99.jsx';
import BusiestHoursChart from './Busiest Hours/busiestHours.jsx';
import BusiestHoursChart27 from './Busiest Hours/busiestHours27.jsx';
import BusiestHoursChart28 from './Busiest Hours/busiestHours28.jsx';
import BusiestHoursChart97 from './Busiest Hours/busiestHours97.jsx';
import BusiestHoursChart98 from './Busiest Hours/busiestHours98.jsx';
import BusiestHoursChart99 from './Busiest Hours/busiestHours99.jsx';
import AverageWaitTimeByHourChart from './Wait Time By Hour/averageWaitTimeByHour.jsx';
import AverageWaitTimeByHourChart27 from './Wait Time By Hour/averageWaitTimeByHour27.jsx';
import AverageWaitTimeByHourChart28 from './Wait Time By Hour/averageWaitTimeByHour28.jsx';
import AverageWaitTimeByHourChart97 from './Wait Time By Hour/averageWaitTimeByHour97.jsx';
import AverageWaitTimeByHourChart98 from './Wait Time By Hour/averageWaitTimeByHour98.jsx';
import AverageWaitTimeByHourChart99 from './Wait Time By Hour/averageWaitTimeByHour99.jsx';
import AveragePaymentTimeByHourChart from './Payment Time By Hour/averagePaymentTimeByHour.jsx';
import AveragePaymentTimeByHourChart27 from './Payment Time By Hour/averagePaymentTimeByHour27.jsx';
import AveragePaymentTimeByHourChart28 from './Payment Time By Hour/averagePaymentTimeByHour28.jsx';
import AveragePaymentTimeByHourChart97 from './Payment Time By Hour/averagePaymentTimeByHour97.jsx';
import AveragePaymentTimeByHourChart98 from './Payment Time By Hour/averagePaymentTimeByHour98.jsx';
import AveragePaymentTimeByHourChart99 from './Payment Time By Hour/averagePaymentTimeByHour99.jsx';


const App = () => {
  return (
    <div>
      <h1>Hellometer Data Analysis</h1>
      <WaitTimeChart/>
      <WaitTimeStatistics27/>
      <WaitTimeStatistics28/>
      <WaitTimeStatistics97/>
      <WaitTimeStatistics98/>
      <WaitTimeStatistics99/>
      <TotalTimesStats/>
      <TotalTimesStats27/>
      <TotalTimesStats28/>
      <TotalTimesStats97/>
      <TotalTimesStats98/>
      <TotalTimesStats99/>
      <OrderPaymentTimesChart/>
      <OrderPaymentTimesChart27/>
      <OrderPaymentTimesChart28/>
      <OrderPaymentTimesChart97/>
      <OrderPaymentTimesChart98/>
      <OrderPaymentTimesChart99/>
      <BusiestHoursChart/>
      <BusiestHoursChart27/>
      <BusiestHoursChart28/>
      <BusiestHoursChart97/>
      <BusiestHoursChart98/>
      <BusiestHoursChart99/>
      <AverageWaitTimeByHourChart/>
      {/*  <AverageWaitTimeByHourChart27/>
      <AverageWaitTimeByHourChart28/>
      <AverageWaitTimeByHourChart97/>
      <AverageWaitTimeByHourChart98/>
      <AverageWaitTimeByHourChart99/>
      <AveragePaymentTimeByHourChart/>
      <AveragePaymentTimeByHourChart27/>
      <AveragePaymentTimeByHourChart28/>
      <AveragePaymentTimeByHourChart97/>
      <AveragePaymentTimeByHourChart98/>
      <AveragePaymentTimeByHourChart99/> */}
    </div>
  );
};

export default App;