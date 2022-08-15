import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../../components/cart/Cart';
import Header from '../../components/header/Header';
import './cart.css';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div className="cart-page">
      <Header />
      <div className="item-collection d-flex flex-column">
        {cartItems?.map((item) => {
          return <Cart item={item} key={item?._id} />;
        })}
      </div>
    </div>
  );
};

export default CartPage;
