import userReducer from "./userReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
export default combineReducers({
  userReducer,
  authReducer,
});
