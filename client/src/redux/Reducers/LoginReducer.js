import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
} from "../actions/LoginActions/types.js";
const initialState = {
  user: localStorage.getItem("user"),
  loading: false,
  errors: null,
  token: null,
  isAuth:localStorage.getItem("isAuth") ,
};
const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, isAuth: false };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("user", JSON.stringify(action.payload.user)); 
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
  /* case LOG_OUT:
    return {...state,
      user:null,
      isAuth:null,
      token:null
    } */
    default:
      return state;
  }
};
export default LoginReducer;
