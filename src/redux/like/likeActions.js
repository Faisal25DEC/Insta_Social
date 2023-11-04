import axios from "axios";
import { GET_POST_LIKES } from "./likeTypes";
import { baseUrl, createAction } from "./../util";

export const likePost = (postId, token) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(`${baseUrl}/likes/like/${postId}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve();
      console.log(res.data);
    } catch (err) {
      console.log(err);
      reject();
    }
  });
};
export const unlikePost = (postId, token) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.patch(`${baseUrl}/likes/unlike/${postId}`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve();
    } catch (err) {
      console.log(err);
      reject();
    }
  });
};
