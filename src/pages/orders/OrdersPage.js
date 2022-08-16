import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import Order from '../../components/order/Order';
import { getOrders } from '../../redux-toolkit/actions/order';
import './orderspage.css';

const OrdersPage = () => {
  const orders = useSelector((state) => state.orders.orders);
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="order-page">
      <Header />
      <div className="orders-collection d-flex flex-column">
        {orders?.map((order) => {
          return <Order order={order} key={order?._id} />;
        })}
      </div>
    </div>
  );
};

export default OrdersPage;
