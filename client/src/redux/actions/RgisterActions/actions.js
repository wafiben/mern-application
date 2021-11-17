import { REGISTER_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS } from "./types";
import axios from "axios";
export const registerUser = (user) => async (dispatch) => {
  console.log('hey')
  dispatch({ type: REGISTER_REQUEST });
  axios
    .post("https://localhost:5000/user/register", user)
    .then((response) => {
      dispatch({ type: REGISTER_SUCCESS, payload: response });
    })
    .catch((error) => {
      dispatch({ type: REGISTER_FAIL, payload: error });
    });
};
