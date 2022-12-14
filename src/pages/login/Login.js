import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux-toolkit/actions/auth";
import { setLoggedIn, setToken } from "../../redux-toolkit/slices/authSlice";
import { dispatch } from "../../redux-toolkit/store";
import { toast } from "react-hot-toast";

import "./login.css";

const Login = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const history = useNavigate();
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
    login(state, setLoading)
      .then((res) => {
        dispatch(setLoggedIn(true));
        dispatch(setToken(res?.data?.token));
        toast.success("Logged In Successfully!");
        history("/home");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Incorrect email or password");
        setLoading(false);
      });
    e.preventDefault();
  };

  return (
    <div className="login-page mt-5">
      <h2 className="text-center text-dark">Login</h2>
      <form className="login-form ">
        <div className="form-group ">
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
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            name="password"
            className="form-control mb-2"
            value={state.password}
            onChange={changeState}
          />
          <a href="#" className="mt-2 float-end ">
            Forget password
          </a>
        </div>

        <button
          className="btn btn-success w-100 login-btn mt-5"
          onClick={submitHandler}
        >
          Sign in
        </button>
        <div className="mt-4 ">
          Don't have an account? <Link to="/register">Create</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
