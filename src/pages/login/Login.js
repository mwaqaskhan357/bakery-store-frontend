import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../redux-toolkit/actions/auth";
import "./login.css";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const changeState = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setState((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandler = (e) => {
    login(state, setLoading);
    // axios
    //   .post(`localhost%3A5000/api/v1/auth/login`, state)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    e.preventDefault();
  };

  return (
    <div className="login-page mt-5">
      <h2 className="text-center">Login</h2>
      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={state.email}
            onChange={changeState}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={state.password}
            onChange={changeState}
          />
        </div>
        <a href="#" className="mt-1">
          Forget password
        </a>
        <button
          className="btn btn-primary w-100 login-btn mt-5"
          onClick={submitHandler}
        >
          Login
        </button>
        <div className="mt-2">
          Don't have an account? <Link to="/register">Create</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;