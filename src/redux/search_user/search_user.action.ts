import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import {
  GET_SEARCH_USER_ALL_DETAIL_REQUEST,
  GET_SEARCH_USER_ALL_DETAIL_REQUEST_SUCCESS,
  USER_ALL_LOADING_FALSE,
} from "./search_user.actionTypes";
import axios from "axios";
import { baseUrl } from "../util";
import { getCookie } from "../../utils/cookies";

export const getUserAllDetailAction = (
  id: string | null
): ThunkAction<void, {}, {}, Action<string>> => {
  return async (dispatch) => {
    console.log(id);

    try {
      const userResponse = await axios.get(`${baseUrl}/users/single/${id}`);
      const postResponse = await axios.get(`${baseUrl}/posts/${id}`);
      const followResponse = await axios.get(`${baseUrl}/followers/${id}`);
      console.log(followResponse);
      dispatch({
        type: GET_SEARCH_USER_ALL_DETAIL_REQUEST_SUCCESS,
        payload: {
          userResponse: userResponse.data,
          postResponse: postResponse.data,
          followers: followResponse.data.followers,
          following: followResponse.data.following,
        },
      });
      dispatch({ type: USER_ALL_LOADING_FALSE });
    } catch (error) {
      console.log(error);
    }
  };
};

export const onFollowAction = (
  _id: string,
  loginUserId: string,
  searchUserId?: any
): ThunkAction<void, {}, {}, Action<string>> => {
  return async (dispatch) => {
    const token: string = getCookie("insta_token");

    const header: { Authorization: string } = {
      Authorization: `Bearer ${token}`,
    };
    // console.log(_id)
    // console.log(userId);
    try {
      console.log(_id);
      const response = await axios.post(
        `${baseUrl}/followers/${_id}`,
        {},
        {
          headers: header,
        }
      );
      console.log(response);
      dispatch(getLoginUserFollowing(loginUserId) as any);
      if (searchUserId) {
        dispatch(getUserAllDetailAction(searchUserId) as any);
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const onUnFollowAction = (
  _id: string,
  loginUserId: string,
  searchUserId?: any
): ThunkAction<void, {}, {}, Action<string>> => {
  return async (dispatch) => {
    const token: string = getCookie("insta_token");

    const header: { Authorization: string } = {
      Authorization: `Bearer ${token}`,
    };

    console.log(header);
    try {
      console.log(_id);
      const response = await axios.delete(`${baseUrl}/followers/${_id}`, {
        headers: header,
      });
      dispatch(getLoginUserFollowing(loginUserId) as any);
      if (searchUserId) {
        dispatch(getUserAllDetailAction(searchUserId) as any);
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getLoginUserFollowing = (
  id: any
): ThunkAction<void, {}, {}, Action<string>> => {
  return async (dispatch) => {
    const token: string = getCookie("insta_token");

    const header: { Authorization: string } = {
      Authorization: `Bearer ${token}`,
    };
    // console.log(_id)
    // console.log(header);
    try {
      const followResponse = await axios.get(`${baseUrl}/followers/${id}`);
      console.log(followResponse.data);
      dispatch({
        type: "LOGIN_USER_FOLLOWING",
        payload: followResponse.data.userFollowingIds,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
