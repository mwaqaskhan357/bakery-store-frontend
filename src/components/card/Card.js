import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card-box">
      <div className="image-container">
        <img
          src="./assests/images/cake.jpg"
          alt=""
          width="280px"
          height="150px"
          className="card-image"
        />
      </div>
      <div className="title-row d-flex justify-content-between mt-2">
        <div className="title">Special cake</div>
        <div className="price">PKR 550</div>
      </div>
      <div className="description-row mt-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled
      </div>
    </div>
  );
};

export default Card;
