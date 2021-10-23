import userReducer from "./userReducer";
import authReducer from "../actions/athtentificationUser/authReducer";
import { combineReducers } from "redux";
export default combineReducers({
  userReducer,
  authReducer,
});
