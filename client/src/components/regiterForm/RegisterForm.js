import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/actions/RgisterActions/actions";
import React, { useState,useEffect } from "react";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    adress: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
    console.log(user)
  };
 

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(registerUser(user));
    setUser({ username: "", email: "", phone: "", adress: "", password: "" });
  };
  useEffect(()=>{
    dispatch(registerUser(user));
  })

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <form  onSubmit={onSubmit} >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={user.username}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            value={user.email}
            onChange={handleChange}
            type="email"
            className="form-control"
            id="email"
            placeholder="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">phone</label>
          <input
            value={user.phone}
            onChange={handleChange}
            type="number"
            className="form-control"
            id="phone"
            placeholder="phone"
          />
        </div>
        <div className="form-group">
          <label htmlFor="adress">adress</label>
          <input
            value={user.adress}
            onChange={handleChange}
            type="text"
            className="form-control"
            id="adress"
            
            placeholder="adress"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            value={user.password}
            onChange={handleChange}
            type="password"
            className="form-control"
            id="password"
           
            placeholder="Password"
          />
        </div>
        <button type="submit"  className="btn btn-primary" value="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
