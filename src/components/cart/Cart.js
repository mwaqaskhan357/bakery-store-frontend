import React, { useState } from 'react';
import {
  decreaseQuantity,
  increaseQuantity,
} from '../../redux-toolkit/slices/cartSlice';
import { dispatch } from '../../redux-toolkit/store';
import './cart.css';

const Cart = ({ item }) => {
  return (
    <div className="cart d-flex mt-5" key={item?._id}>
      <div className="cart-image-container me-3">
        {item?.image == 'no-photo.jpg' ? (
          <img
            src="../assests/images/cake.jpg"
            alt=""
            width="auto"
            height="auto"
            className="cart-image"
          />
        ) : (
          <img
            src={item?.image}
            alt=""
            width="auto"
            height="auto"
            className="cart-image"
          />
        )}
      </div>
      <div className="cart-detail d-flex flex-column w-50 ms-3">
        <div className="cart-title">{item?.title}</div>
        <div className="cart-price">Rs {item?.price}</div>
        <div className="cart-description">{item?.description}</div>
        <div className="quantity-row w-100 d-flex align-items-center justify-content-end">
          <button
            className="decrease-btn"
            onClick={() => dispatch(decreaseQuantity(item?._id))}
          >
            -
          </button>
          <div className="quantity">{item?.quantity}</div>
          <button
            className="increase-btn"
            onClick={() => dispatch(increaseQuantity(item?._id))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
