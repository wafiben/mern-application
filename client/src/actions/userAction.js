import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
} from "./userType";

export const getusers = () => (dispatch) => {
  dispatch({ type: GET_USERS_REQUEST });
  axios
    .get("/users")
    .then((response) => {
      dispatch({ type: GET_USERS_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: GET_USERS_FAIL, payload: error });
    });
};
