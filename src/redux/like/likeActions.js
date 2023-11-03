import axios from "axios";
import { GET_POST_LIKES } from "./likeTypes";
import { baseUrl, createAction } from "./../util";

export const getPostLikes = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/likes/${postId}`);
    console.log(res);
    dispatch(createAction(GET_POST_LIKES, res.data));
  } catch (err) {
    console.log(err);
  }
};

export const likePost = (postId, token) => async (dispatch) => {
  try {
    const res = await axios.patch(`${baseUrl}/likes/like/${postId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res.data);
    dispatch(getPostLikes(postId));
  } catch (err) {
    console.log(err);
  }
};
export const unlikePost = (postId, token) => async (dispatch) => {
  try {
    const res = await axios.patch(`${baseUrl}/likes/unlike/${postId}`, null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(getPostLikes(postId));
  } catch (err) {
    console.log(err);
  }
};
