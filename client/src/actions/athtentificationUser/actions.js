import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "./types.js";
import axios from "axios";
export const register = (username, email, phone, adress, password) => (dispatch) =>{
  axios
    .post("/register", { username, email, phone, adress, password })
    .then((response) => {
      dispatch({ type: REGISTER_SUCCESS, payload: response.data });
      /* dispatch({ type: SET_MESSAGE, payload:  }); */
    })
    .catch((error) => {
      dispatch({ type: REGISTER_FAIL });
      dispatch({ type: SET_MESSAGE, payload: error });
    });
};
