import React from "react";
import "./LoginForm.css";

import {useNavigate} from 'react-router-dom';
import react, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { LoginUser } from "../../redux/actions/LoginActions/actions.js";
const LoginForm = () => {
   const userIformations=useSelector(state=>state.LoginReducer) 
   console.log(userIformations.isAuth)
  const navigate =useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ email: "", password: "" });
  function HandleChange(event) {
    setUser({ ...user, [event.target.id]: event.target.value });
   
  }
 
  function onSubmit(event) {
    event.preventDefault();
    dispatch(LoginUser(user));
    setUser({ email: "", password: "" }); 
  }
  useEffect(()=>{
    if(userIformations.isAuth){
      navigate('/user-profile')
    }
    else{
      navigate('/login')
    }
  }
  ,[userIformations.isAuth]) 
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label for="email">Email address</label>
        <input
          onChange={HandleChange}
          type="email"
          className="form-control"
          id="email"
          value={user.email}
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label for="password">Password</label>
        <input
          value={user.password}
          onChange={HandleChange}
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default LoginForm;
