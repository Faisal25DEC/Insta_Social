import axios from "axios";
import { baseUrl, createAction } from "../util";
import { GET_POSTS } from "./postTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const posts = await axios.get(`${baseUrl}/posts/public`);
    dispatch(createAction(GET_POSTS, posts.data));
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (token, payload) => async (dispatch) => {
  try {
    const post = await axios.post(`${baseUrl}/posts`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(payload);
    console.log(token);
    dispatch(getPosts());
  } catch (err) {
    console.log(err);
  }
};
