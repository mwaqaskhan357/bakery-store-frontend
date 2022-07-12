import React from "react";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import "./home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="home">
        <div className="banner-box">
          <img
            src="./assests/images/bnnr.jpg"
            alt=""
            className="banner-image"
          />
        </div>
        <div className="collection px-3 mt-3">
          <h2 className="collection-header1">Cakes</h2>
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
          <h2 className="collection-header ">Cakes</h2>
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
          <h2 className="collection-header ">Cakes</h2>
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
