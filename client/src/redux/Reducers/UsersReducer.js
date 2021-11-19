import {
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
  } from "../actions/usersActions/types.js";
  const initState = { users: [], loading: false, errors: null };
  const UsersReducer = (state = initState, action) => {
    switch (action.type) {
      case GET_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
          loading: false,
        };
      case GET_USERS_FAIL:
        return {
          ...state,
          errors: action.payload,
        };
      default:
        return state;
    }
  };
  export default UsersReducer;
  