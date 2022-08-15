import React, { useState } from 'react';
import { removeCartItem } from '../../redux-toolkit/slices/cartSlice';
import { dispatch } from '../../redux-toolkit/store';
import './cart.css';

const Cart = (props) => {
  const [item, setItem] = useState(props.item);
  const handleRemove = (item) => {
    dispatch(removeCartItem(item));
  };
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
        <div className="quantity-row w-100 d-flex justify-content-between">
          <input
            className="form-control quantity-input"
            type="number"
            name="quantity"
            id="quantity"
            value={item?.quantity}
            disabled
          />
          <button
            className="btn btn-light remove-from-cart"
            onClick={() => handleRemove(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
