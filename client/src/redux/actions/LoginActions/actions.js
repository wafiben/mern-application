import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "./types.js";
import axios from "axios";
export const LoginUser = (user) =>  async (dispatch) => {
  console.log("lanched");
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post("http://localhost:5000/user/login", user)
    .then((response) => {
     dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
   .catch((error)=> {
       dispatch({ type: LOGIN_FAIL, payload: error });
    }); 

};
