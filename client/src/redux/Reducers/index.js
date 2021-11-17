import AuthReducer from "./RegisterReducer"
import LoginReducer from "./LoginReducer"
import { combineReducers } from "redux";
export default combineReducers({
AuthReducer,
LoginReducer
});
