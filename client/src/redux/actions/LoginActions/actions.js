import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL,LOG_OUT } from "./types.js";
import axios from "axios";
export const LoginUser = (user) =>  async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  axios
    .post("http://localhost:5000/user/login", user)
    .then((response) => {
     dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    })
   .catch((error)=> {
       dispatch({ type: LOGIN_FAIL, payload: error });
    }); 
    dispatch({type:LOG_OUT})
};


