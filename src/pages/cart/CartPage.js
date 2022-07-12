import React from "react";
import Cart from "../../components/cart/Cart";
import Header from "../../components/header/Header";
import "./cart.css";

const CartPage = () => {
  return (
    <div className="cart-page">
      <Header />
      <div className="item-collection d-flex flex-column">
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
    
  );
};

export default CartPage;
