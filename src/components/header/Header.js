import React, { useEffect, useState } from 'react';
import './header.css';
import { FiShoppingCart } from 'react-icons/fi';
import axios from 'axios';
import Categoryfilter from '../../components/categoryfilter/Categoryfilter';

import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import { setUser } from '../../redux-toolkit/slices/authSlice';
import { dispatch } from '../../redux-toolkit/store';
import { Link } from 'react-router-dom';
const Header = () => {
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);
  const total_quantity = useSelector((state) => state.cart.total_quantity);
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/v1/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(setUser(response?.data?.data));
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <div className="text-dark"> BAKERY</div>
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  <Link to="/home" className="text-white text-decoration-none">
                    Home
                  </Link>
                </a>
              </li>
              <Categoryfilter />

              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link
                    to="/register "
                    className="text-white text-decoration-none"
                  >
                    Sign In/Up
                  </Link>
                </a>
              </li>
            </ul>
            <div className="user-name">
              {user?.first_name} {user?.city} {user?.email}
            </div>
            <form className="d-flex">
              <input
                className="form-control form-outline-dark me-2 bg-white m-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <button
                className="btn btn-light btn-outline-dark border-white p-1 m-1"
                type="submit"
              >
                Search
              </button>
            </form>
            <Link
              to="/cart"
              className="cart-count d-flex align-items-center ms-3 text-warning"
            >
              <FiShoppingCart size={30} />
              <div className="count ms-2">{total_quantity ?? 0}</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
