import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getusers } from "../actions/userAction";

const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
    console.log("hello");
  }, [dispatch]);

  const users = useSelector((state) => {
    if (state) {
      return state.userReducer.users;
    } else {
      return "waiting for the list ";
    }
  });

  return (
    <div>
      {users.length > 0
        ? users.map((user) => <h1>{user.email}</h1>)
        : "loading"}
    </div>
  );
};
export default UserList;
