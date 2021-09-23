import React from 'react';
import  { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {getusers} from'../actions/userAction';

 const UserList = () => {
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getusers()); 
     console.log('hello')
      },[dispatch]);
    return (
        <div>
            hello
        </div>
    )
}
export default UserList;