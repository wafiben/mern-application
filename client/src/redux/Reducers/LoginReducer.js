import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../actions/LoginActions/types.js";
const initialState = {
  user: {},
  loading: false,
  errors: null,
  token: null,
  isAuth: false,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, isAuth: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        token: action.payload.token,
        isAuth: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: action.payload.user,
        loading: true,
        token: action.payload.token,
        isAuth: false,
      };
    default:
      return state;
  }
};
export default LoginReducer;
