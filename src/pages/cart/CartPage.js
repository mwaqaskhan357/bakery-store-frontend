import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import Cart from '../../components/cart/Cart';
import Header from '../../components/header/Header';
import { placeOrders } from '../../redux-toolkit/actions/order';
import './cart.css';

const CartPage = () => {
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total_bill = useSelector((state) => state.cart.total_bill);
  const orderHandler = (body) => {
    placeOrders(body, setOrderPlaced);
  };
  return (
    <div className="cart-page">
      <Header />
      <div className="item-collection d-flex flex-column">
        {cartItems?.map((item) => {
          return <Cart item={item} key={item?._id} />;
        })}
        <div className="button-container d-flex align-items-center justify-content-end mt-5">
          <button
            className="place-order btn btn-primary"
            onClick={() => orderHandler({ total_bill, line_items: cartItems })}
          >
            Place Order
          </button>
        </div>
      </div>
      {orderPlaced && <Navigate to="/orders" />}
    </div>
  );
};

export default CartPage;
