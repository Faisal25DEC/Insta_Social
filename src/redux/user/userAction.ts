import axios from "axios";
import {
  GET_LOGIN_ERROR,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_SIGNUP_ERROR,
  GET_SIGNUP_REQUEST,
  GET_SIGNUP_SUCCESS,
  SEARCH,
  SIGN_OUT,
  UNFOLLOWED_USERS,
} from "./userType";
import { Alert, AlertIcon } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { baseUrl, createAction } from "../util";
import { getUserAllDetailAction } from "../search_user/search_user.action";
import { getPosts } from "../post/postActions";
import { Dispatch } from "redux";

export const getUserDetails = (token: string) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get(`${baseUrl}/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);

    dispatch({ type: GET_LOGIN_SUCCESS, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const getUnfollowedUsers =
  (token: string) => async (dispatch: Dispatch) => {
    try {
      const res = await axios.get(`${baseUrl}/users/unfollowedUsers`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(res);
      dispatch(createAction(UNFOLLOWED_USERS, res.data));
    } catch (err) {
      console.log(err);
    }
  };

export const SigningUp =
  (data: { email: string; password: string }) => async (dispatch: Dispatch) => {
    dispatch({
      type: GET_SIGNUP_REQUEST,
    });
    try {
      const res = await axios.post(`${baseUrl}/users/signup`, data);
      dispatch({
        type: GET_SIGNUP_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_SIGNUP_ERROR,
      });
    }
  };

export const SigningIn =
  (data: { email: string; password: string; name: string; userName: string }) =>
  async (dispatch: Dispatch) => {
    dispatch({
      type: GET_LOGIN_REQUEST,
    });
    try {
      const res = await axios.post(`${baseUrl}/users/login`, data, {
        withCredentials: true,
      });
      Cookies.set("insta_token", res.data.token);

      dispatch({
        type: GET_LOGIN_SUCCESS,
        payload: data,
      });
      console.log(data);
      window.location.href = "/";
    } catch (err) {
      dispatch({
        type: GET_LOGIN_ERROR,
      });
    }
  };

export const searching = (data: string) => async (dispatch: Dispatch) => {
  console.log(data);
  try {
    const obj = {
      input: data,
    };
    const res = await axios.get(`${baseUrl}/users/search/${data}`);
    dispatch({
      type: SEARCH,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const SignOut = (dispatch: Dispatch) => {
  dispatch({ type: SIGN_OUT });
};

export const updateProfile =
  (
    payload: { profileImage?: string; bio?: string },
    token: string,
    id: string
  ) =>
  async (dispatch: Dispatch) => {
    try {
      const res = await axios.patch(`${baseUrl}/users/update`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getUserDetails(token) as any);
      dispatch(getUserAllDetailAction(id) as any);
      dispatch(getPosts() as any);
    } catch (error) {
      console.log(error);
    }
  };
