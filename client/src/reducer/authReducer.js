import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
  CLEAR_MESSAGE,
} from "../actions/athtentificationUser/types.js";
const initialState = {
  user: {},
  loading: false,
  errors: null,
  token: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload, loading: true };
    case REGISTER_FAIL:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};
export default authReducer;
