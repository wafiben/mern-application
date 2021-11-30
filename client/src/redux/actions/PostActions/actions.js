import axios from "axios";
import { GET_POSTS, POST_REQUEST } from "./types.js";
export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get("");
    dispatch({ type: GET_POSTS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
export const postPost = (newPost) => async (dispatch) => {
  try {
    const response = await axios.post("", newPost);
    dispatch({ type: POST_REQUEST, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
