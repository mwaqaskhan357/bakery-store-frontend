import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import { setCartItems } from '../../redux-toolkit/slices/cartSlice';
import { dispatch } from '../../redux-toolkit/store';
import './item.css';

const Item = () => {
  const variant = useSelector((state) => state.items.singleItem);
  const handleAddToCart = (variant) => {
    dispatch(setCartItems(variant));
  };
  return (
    <div className="item-page">
      <Header />
      <div className="item-main-page d-flex mt-5">
        <div className="item-image-container me-3">
          {variant?.image == 'no-photo.jpg' ? (
            <img
              src="../assests/images/cake6.jpg"
              alt=""
              width="auto"
              height="auto"
              className="item-image"
            />
          ) : (
            <img
              src={variant?.image}
              alt=""
              width="auto"
              height="auto"
              className="item-image"
            />
          )}
        </div>
        <div className="item-detail d-flex flex-column w-50 ms-3 ">
          <div className="item-title">{variant?.title}</div>
          <div className="item-price">PKR {variant?.price}</div>
          <div className="item-description">{variant?.description}</div>
          <div className="quantity-row w-100 d-flex justify-content-between">
            <button
              className="btn btn-primary add-to-cart"
              onClick={() => handleAddToCart(variant)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
