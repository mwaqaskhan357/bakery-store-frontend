import React, { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setFilterCatgories } from "../../redux-toolkit/slices/categoriesSlice";
import { dispatch } from "../../redux-toolkit/store";
import "./categoryfilter.css";

//Filter list by category in React JS
export default function App() {
  const allCategories = useSelector((state) => state.home.categories);
  const handleCategoryChange = (id) => {
    let filteredCategories = allCategories?.filter(
      (category) => category?._id == id
    );
    dispatch(setFilterCatgories(filteredCategories));
  };
  return (
    <div className="dropdown">
      <button
        type="button"
        className="btn dropdown-toggle m-1"
        data-bs-toggle="dropdown"
      >
        Category
      </button>
      <ul className="dropdown-menu">
        {allCategories?.map((category) => {
          return (
            <li
              onClick={() => handleCategoryChange(category?._id)}
              key={category?._id}
            >
              {category?.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
