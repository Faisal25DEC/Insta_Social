import axios from "axios";
import { baseUrl, createAction } from "../util";
import { GET_POSTS } from "./postTypes";
import { getUserAllDetailAction } from "../search_user/search_user.action";
import { Dispatch } from "redux";

export const getPosts = () => async (dispatch: Dispatch) => {
  try {
    const posts = await axios.get(`${baseUrl}/posts/public`);
    dispatch(createAction(GET_POSTS, posts.data));
  } catch (err) {
    console.log(err);
  }
};

export const createPost =
  (
    token: string,
    payload: { mediaUrl: string; caption?: string },
    id: string
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const post = await axios.post(`${baseUrl}/posts`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(payload);
      console.log(token);
      dispatch(getPosts() as any);
      dispatch(getUserAllDetailAction(id) as any);
    } catch (err) {
      console.log(err);
    }
  };
