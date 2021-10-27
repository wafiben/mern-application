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
const headers = {
  Authorization: "Bearer my-token",
  "My-Custom-Header": "foobar",
};
export const register = (user) => async (dispatch) => {
  console.log("hey");
  //{ /* "Content-Type": "application/json" */   'Content-Type': 'application/x-www-form-urlencoded' }

  axios
    .post(
      "https://localhost:5000/user/register",
      { headers: { "Content-Type": "application/json" } },

      user
    )

    .then((response) => {
      // dispatch({ type: REGISTER_SUCCESS, payload: response });
      //dispatch({ type: SET_MESSAGE, payload:response.data });
      console.log(response);
      /*  { if (response.status === 200) { console.log(response) } }
      return response.data */
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: REGISTER_FAIL, payload: error });
      // dispatch({ type: SET_MESSAGE, payload: error });
    });
};
