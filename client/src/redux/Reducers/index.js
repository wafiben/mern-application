import AuthReducer from "./RegisterReducer"
import LoginReducer from "./LoginReducer"
import UsersReducer from "./UsersReducer"
import PostReducer from './PostReducer'
import { combineReducers } from "redux";
export default combineReducers({
AuthReducer,
LoginReducer,
UsersReducer,
PostReducer
});
