import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { getCategories } from "../../redux-toolkit/actions/categories";
import "./home.css";

const Home = () => {
  const user = useSelector((state) => state.login.user);
  const filteredCategories = useSelector(
    (state) => state.home.filteredCategories
  );
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <div className="banner-page">
        <div className=" mt-1">
          <div className="">
            <img
              src="../assests/images/bannerr.jpg"
              alt=""
              width="auto"
              height="auto"
              className="banner-page"
            />
          </div>
        </div>
      </div>
      {filteredCategories?.map((category) => {
        return (
          <div className="collection px-3 mt-3">
            {category?.variants?.length > 0 && (
              <>
                <h2 className="collection-header1 s">{category?.title}</h2>
                <div className="collection-row d-flex">
                  {category?.variants?.map((variant) => {
                    return <Card variant={variant} />;
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
