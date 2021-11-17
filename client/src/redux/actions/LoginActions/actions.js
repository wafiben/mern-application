import { LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAIL } from "./types.js";
import axios from "axios";
export const LoginUser = (user) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios.post("https://localhost:5000/user/login", user).then((response) => {
    dispatch({ type: LOGIN_SUCCESS, payload: response }).catch((error) => {
      dispatch({ type: LOGIN_FAIL, payload: error });
    });
  });
};
