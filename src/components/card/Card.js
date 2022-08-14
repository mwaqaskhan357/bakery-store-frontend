import React from "react";
import "./card.css";

const Card = ({ variant }) => {
  return (
    <div className="card-box">
      <div className="image-container">
        {variant?.image == "no-photo.jpg" ? (
          <img
            src="./assests/images/cake.jpg"
            alt=""
            width="280px"
            height="150px"
            className="card-image"
          />
        ) : (
          <img
            src={variant?.image}
            alt=""
            width="280px"
            height="150px"
            className="card-image"
          />
        )}
      </div>
      <div className="title-row d-flex justify-content-between mt-2">
        <div className="title">{variant?.title}</div>
        <div className="price">PKR {variant?.price}</div>
      </div>
      <div className="description-row mt-2">{variant?.description}</div>
    </div>
  );
};

export default Card;
