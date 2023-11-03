import axios from "axios";
import { createAction } from "./../util";
import {
  POST_COMMENTS_FAILURE,
  POST_COMMENTS_LOADING,
  POST_COMMENTS_SUCCESS,
} from "./commentTypes";
import { getCookie } from "../../utils/cookies";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPostComments = (postId) => async (dispatch) => {
  console.log(postId);
  dispatch(createAction(POST_COMMENTS_LOADING));
  try {
    const res = await axios.get(`${baseUrl}/comments/${postId}`);
    console.log(res);
    dispatch(createAction(POST_COMMENTS_SUCCESS, res.data));
  } catch (err) {
    dispatch(createAction(POST_COMMENTS_FAILURE));
  }
};

export const postComment = (comment, postId) => async (dispatch) => {
  try {
    const token = getCookie("jwttoken");
    const res = await axios.post(
      `${baseUrl}/comments/${postId}`,
      { comment, postId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getPostComments(postId));
  } catch (err) {}
};
