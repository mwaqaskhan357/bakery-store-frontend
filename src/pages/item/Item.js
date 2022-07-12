import React from "react";
import Header from "../../components/header/Header";
import "./item.css";

const Item = () => {
  return (
    <div className="item-page">
      <Header />
      <div className="item-main-page d-flex mt-5">
        <div className="item-image-container me-3">
          <img
            src="../assests/images/cake6.jpg"
            alt=""
            width="auto"
            height="auto"
            className="item-image"
          />
        </div>
        <div className="item-detail d-flex flex-column w-50 ms-3">
          <div className="item-title">Special cake</div>
          <div className="item-price">PKR 100</div>
          <div className="item-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled
          </div>
          <div className="quantity-row w-100 d-flex justify-content-between">
            <input
              className="form-control quantity-input"
              type="number"
              name="quantity"
              id="quantity"
              defaultValue={1}
            />
            <button className="btn btn-primary add-to-cart">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
