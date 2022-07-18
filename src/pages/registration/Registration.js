import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css";
import { setLoggedIn, setToken } from "../../redux-toolkit/slices/authSlice";
import { dispatch } from "../../redux-toolkit/store";
import { toast } from "react-hot-toast";
import { register } from "../../redux-toolkit/actions/auth";

const Registration = () => {
  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
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
    register(state, setLoading)
      .then((res) => {
        dispatch(setLoggedIn(true));
        dispatch(setToken(res?.data?.token));
        toast.success("Logged In Successfully!");
        history("/home");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error?.message);
        setLoading(false);
      });
    e.preventDefault();
  };
  return (
    <div className="register-page mt-4">
      <h2 className="text-center">Register</h2>
      <form className="register-form">
        <div className="form-group  mt-2">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            className="form-control"
            value={state.first_name}
            onChange={changeState}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            className="form-control"
            value={state.last_name}
            onChange={changeState}
          />
        </div>
        <div className="form-group mt-2">
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
        <div className="form-group mt-2">
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
        <div className="form-group mt-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            className="form-control"
            value={state.cpassword}
            onChange={changeState}
          />
        </div>
        <button className="btn btn-primary w-100 mt-5" onClick={submitHandler}>
          Register
        </button>
        <div className="mt-5">
          Already have account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
