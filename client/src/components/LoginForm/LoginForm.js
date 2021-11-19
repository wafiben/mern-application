import React from "react";
import "./LoginForm.css";
import react, { useState } from "react";
import { useDispatch } from "react-redux";
import {LoginUser} from "../../redux/actions/LoginActions/actions";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  function handleChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });
  }
  function onSubmit(event) {
    event.preventDefault();
    dispatch(LoginUser(user));
    setUser({ email: "", password: "" });
  }
  console.log('hey')
  return (
    <div className="conainer-f">
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">
                  Sign In
                </h5>
                <form onSubmit={onSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleChange}
                      id="email"
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      onChange={handleChange}
                      id="password"
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                  <hr className="my-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
