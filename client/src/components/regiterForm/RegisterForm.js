import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/athtentificationUser/actions";
import React, { useState } from "react";
const RegisterForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    adress: "",
    password: "",
  });
  function handleChange(event) {
    setUser({
      ...user,
      [event.target.id]: event.target.value,
    });
    const on = (event) => {
      event.preventDefault();
      handleChange(event);
      dispatch(
        register(
          user.username,
          user.email,
          user.phone,
          user.adress,
          user.password
        )
      );
      setUser({ username: "", email: "", phone: "", adress: "", password: "" });
    };
  }
  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input value={user.username}
            onChange={handleChange}
            type="email"
            class="form-control"
            id="username"
            name="username"
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">email</label>
          <input value={user.email}
            onChange={handleChange}
            type="eamil"
            class="form-control"
            id="email"
            name="email"
            placeholder="email"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">phone</label>
          <input value={user.phone}
            onChange={handleChange}
            type="number"
            class="form-control"
            id="phone"
            placeholder="phone"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">adress</label>
          <input value={user.adress}
            onChange={handleChange}
            type="text"
            class="form-control"
            id="adress"
            name="adress"
            placeholder="adress"
          />
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">password</label>
          <input value={user.password}
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
