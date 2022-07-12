import React from "react";
import { Link } from "react-router-dom";
import "./registration.css";

const Registration = () => {
  return (
    <div className="register-page mt-5">
      <h2 className="text-center">Register</h2>
      <form className="register-form">
        <div className="form-group mt-2">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            className="form-control"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="form-control"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="cpassword">Confirm Password</label>
          <input
            type="password"
            id="cpassword"
            name="cpassword"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary w-100 mt-4" type="submit">
          Register
        </button>
        <div className="mt-2">
          Already have account? <Link to="/">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Registration;
