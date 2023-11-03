import axios from "axios";
import { createAction } from "./../util";
import {
  POST_COMMENTS_FAILURE,
  POST_COMMENTS_LOADING,
  POST_COMMENTS_SUCCESS,
} from "./commentTypes";
import { getCookie } from "../../utils/cookies";

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getPostComments = (blogId) => async (dispatch) => {
  console.log(blogId);
  dispatch(createAction(POST_COMMENTS_LOADING));
  try {
    const res = await axios.get(`${baseUrl}/comments/${blogId}`);
    console.log(res);
    dispatch(createAction(POST_COMMENTS_SUCCESS, res.data));
  } catch (err) {
    dispatch(createAction(POST_COMMENTS_FAILURE));
  }
};

export const postComment = (comment, blogId) => async (dispatch) => {
  try {
    const token = getCookie("jwttoken");
    const res = await axios.post(
      `${baseUrl}/comments`,
      { comment, blogId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getPostComments(blogId));
  } catch (err) {}
};
