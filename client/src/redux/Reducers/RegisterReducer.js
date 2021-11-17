import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "../actions/RgisterActions/types.js";
const initialState = {
  user: {},
  loading: false,
  errors: null,
  token: null,
  isAuth: false,
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true, isAuth: false };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        loading: false,
        token: action.payload.token,
        isAuth: true,
      };
    case REGISTER_FAIL:
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
export default AuthReducer;
