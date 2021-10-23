import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../athtentificationUser/types.js";
const initialState = {
  user: { username: "", email: "", phone: "", adress: "" },
  resgitered: false,
};
const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload, resgitered: true };
    case REGISTER_FAIL:
      return { ...state, resgitered: false };
    default:
      return state;
  }
};
export default authReducer;
