import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cart d-flex mt-5">
      <div className="cart-image-container me-3">
        <img
          src="../assests/images/cake.jpg"
          alt=""
          width="auto"
          height="auto"
          className="cart-image"
        />
      </div>
      <div className="cart-detail d-flex flex-column w-50 ms-3">
        <div className="cart-title">Special cake</div>
        <div className="cart-price">Rs 100</div>
        <div className="cart-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled
        </div>
        <div className="quantity-row w-100 d-flex justify-content-between">
          <input
            className="form-control quantity-input"
            type="number"
            name="quantity"
            id="quantity"
            defaultValue={1}
          />
          <button className="btn btn-light remove-from-cart">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
