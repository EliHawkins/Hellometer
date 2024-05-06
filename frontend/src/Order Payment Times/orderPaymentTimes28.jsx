import React, { useEffect, useState } from 'react';

const OrderPaymentTimesStats28 = () => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    fetch('http://127.0.0.1:5000/store28/order-payment-times')
      .then(response => response.json())
      .then(data => setStats(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Order and Payment Times Statistics for Store 28</h2>
      {stats.order_stats && (
      <ul>
          <li>Average Order Time: {stats.order_stats.average_order_time !== undefined ? stats.order_stats.average_order_time.toFixed(2) : 'N/A'}</li>
          <li>Median Order Time: {stats.order_stats.median_order_time !== undefined ? stats.order_stats.median_order_time.toFixed(2) : 'N/A'}</li>
          <li>Standard Deviation of Order Time: {stats.order_stats.std_dev_order_time !== undefined ? stats.order_stats.std_dev_order_time.toFixed(2) : 'N/A'}</li>
          <li>Average Payment Time: {stats.payment_stats.average_payment_time !== undefined ? stats.payment_stats.average_payment_time.toFixed(2) : 'N/A'}</li>
          <li>Median Payment Time: {stats.payment_stats.median_payment_time !== undefined ? stats.payment_stats.median_payment_time.toFixed(2) : 'N/A'}</li>
          <li>Standard Deviation of Payment Time: {stats.payment_stats.std_dev_payment_time !== undefined ? stats.payment_stats.std_dev_payment_time.toFixed(2) : 'N/A'}</li>
    </ul>
      )}
    </div>
  );
};

export default OrderPaymentTimesStats28;
