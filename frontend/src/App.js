import React, { useState } from 'react';
import WaitTimeStatistics from './Wait Time Stats/waitTime.jsx';
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
import OrderPaymentTimesStats from './Order Payment Times/orderPaymentTimes.jsx';
import OrderPaymentTimesStats27 from './Order Payment Times/orderPaymentTimes27.jsx';
import OrderPaymentTimesStats28 from './Order Payment Times/orderPaymentTimes28.jsx';
import OrderPaymentTimesStats97 from './Order Payment Times/orderPaymentTimes97.jsx';
import OrderPaymentTimesStats98 from './Order Payment Times/orderPaymentTimes98.jsx';
import OrderPaymentTimesStats99 from './Order Payment Times/orderPaymentTimes99.jsx';
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
  const [selectedCharts, setSelectedCharts] = useState([<WaitTimeStatistics/>, <TotalTimesStats/>, <BusiestHoursChart/>, <OrderPaymentTimesStats/>, <AverageWaitTimeByHourChart/>,<AveragePaymentTimeByHourChart/>]);

  const renderCharts = (components) => {
    setSelectedCharts(components);
  };

  const handleSelect = (event) => {
    const chartNames = event.target.value.split(',');
    const components = chartNames.map(chartName => {
      switch (chartName) {
        case 'WaitTime':
          return <WaitTimeStatistics key={chartName} />;
        case 'WaitTime27':
          return <WaitTimeStatistics27 key={chartName} />;
        case 'WaitTime28':
          return <WaitTimeStatistics28 key={chartName} />;
          case 'WaitTime97':
          return <WaitTimeStatistics97 key={chartName} />;
        case 'WaitTime98':
          return <WaitTimeStatistics98 key={chartName} />;
        case 'WaitTime99':
          return <WaitTimeStatistics99 key={chartName} />;

        case 'TotalTimesStats':
          return <TotalTimesStats key={chartName} />;
        case 'TotalTimesStats27':
          return <TotalTimesStats27 key={chartName} />;
        case 'TotalTimesStats28':
          return <TotalTimesStats28 key={chartName} />;
          case 'TotalTimesStats97':
          return <TotalTimesStats97 key={chartName} />;
        case 'TotalTimesStats98':
          return <TotalTimesStats98 key={chartName} />;
        case 'TotalTimesStats99':
          return <TotalTimesStats99 key={chartName} />;

        case 'BusiestHoursChart':
          return <BusiestHoursChart key={chartName} />;
        case 'BusiestHoursChart27':
          return <BusiestHoursChart27 key={chartName} />;
        case 'BusiestHoursChart28':
          return <BusiestHoursChart28 key={chartName} />;
          case 'BusiestHoursChart97':
          return <BusiestHoursChart97 key={chartName} />;
        case 'BusiestHoursChart98':
          return <BusiestHoursChart98 key={chartName} />;
        case 'BusiestHoursChart99':
          return <BusiestHoursChart99 key={chartName} />;

        case 'OrderPaymentStatsChart':
          return <OrderPaymentTimesStats key={chartName} />;
        case 'OrderPaymentTimesStats27':
          return <OrderPaymentTimesStats27 key={chartName} />;
        case 'OrderPaymentTimesStats28':
          return <OrderPaymentTimesStats28 key={chartName} />;
          case 'OrderPaymentTimesStats97':
          return <OrderPaymentTimesStats97 key={chartName} />;
        case 'OrderPaymentTimesStats98':
          return <OrderPaymentTimesStats98 key={chartName} />;
        case 'OrderPaymentTimesStats99':
          return <OrderPaymentTimesStats99 key={chartName} />;

        case 'AverageWaitTimeByHourChart':
          return <AverageWaitTimeByHourChart key={chartName} />;
        case 'AverageWaitTimeByHourChart27':
          return <AverageWaitTimeByHourChart27 key={chartName} />;
        case 'AverageWaitTimeByHourChart28':
          return <AverageWaitTimeByHourChart28 key={chartName} />;
          case 'AverageWaitTimeByHourChart97':
          return <AverageWaitTimeByHourChart97 key={chartName} />;
        case 'AverageWaitTimeByHourChart98':
          return <AverageWaitTimeByHourChart98 key={chartName} />;
        case 'AverageWaitTimeByHourChart99':
          return <AverageWaitTimeByHourChart99 key={chartName} />;

        case 'AveragePaymentTimeByHourChart':
          return <AveragePaymentTimeByHourChart key={chartName} />;
        case 'AveragePaymentTimeByHourChart27':
          return <AveragePaymentTimeByHourChart27 key={chartName} />;
        case 'AveragePaymentTimeByHourChart28':
          return <AveragePaymentTimeByHourChart28 key={chartName} />;
          case 'AveragePaymentTimeByHourChart97':
          return <AveragePaymentTimeByHourChart97 key={chartName} />;
        case 'AveragePaymentTimeByHourChart98':
          return <AveragePaymentTimeByHourChart98 key={chartName} />;
        case 'AveragePaymentTimeByHourChart99':
          return <AveragePaymentTimeByHourChart99 key={chartName} />;
        default:
          return null;
      }
    });
    renderCharts(components);
  };


  return (
    <div>
      <h1>Hellometer Data Analysis</h1>
      <select onChange={handleSelect}>
        <option value="WaitTime,TotalTimesStats,OrderPaymentTimesChart,AverageWaitTimeByHourChart,AveragePaymentTimeByHourChart">Across All Stores</option>
        <option value="WaitTime27,TotalTimesStats27,BusiestHoursChart27,OrderPaymentTimesStats27,AverageWaitTimeByHourChart27,AveragePaymentTimeByHourChart27">Store 27</option>
        <option value="WaitTime28,TotalTimesStats28,BusiestHoursChart28,OrderPaymentTimesStats28,AverageWaitTimeByHourChart28,AveragePaymentTimeByHourChart28">Store 28</option>
        <option value="WaitTime97,TotalTimesStats97,BusiestHoursChart97,OrderPaymentTimesStats97,AverageWaitTimeByHourChart97,AveragePaymentTimeByHourChart97">Store 97</option>
        <option value="WaitTime98,TotalTimesStats98,BusiestHoursChart98,OrderPaymentTimesStats98,AverageWaitTimeByHourChart98,AveragePaymentTimeByHourChart98">Store 98</option>
        <option value="WaitTime99,TotalTimesStats99,BusiestHoursChart99,OrderPaymentTimesStats99,AverageWaitTimeByHourChart99,AveragePaymentTimeByHourChart99">Store 99</option>
      </select>
      <div>
        {selectedCharts}
      </div>
    </div>
  );
};

export default App;