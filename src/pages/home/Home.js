import React from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="home">
        <div className="banner-box px-2 ">
          <img
            src="./assests/images/bnnr.jpg"
            alt=""
            className="banner-image"
          />
        </div>
        <div className="collection px-3 mt-3">
          <h2 className="collection-header1">CAKES</h2>
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
        <div className="collection px-3 mt-3">
          <h2 className="collection-header ">BISCUITS</h2>
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
        <div className="collection px-3 mt-3">
          <h2 className="collection-header ">BREAD</h2>
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
        <div className="collection px-3 mt-3">
          <h2 className="collection-header ">SWEETS</h2>
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
        <div className="collection px-3 mt-3">
          <h2 className="collection-header ">BROWNIE</h2>
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
    </div>
  );
};

export default Home;
