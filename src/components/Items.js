import React from "react";
import "./items.css";

import Card from "./card/Card";
const Item = () => {
  return (
    <div className="home-page">
      <div className="collection px-3 mt-3">
        <h2 className="collection-header1 s">CAKES</h2>
        <div className="collection-row d-flex">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};
export default Item;
