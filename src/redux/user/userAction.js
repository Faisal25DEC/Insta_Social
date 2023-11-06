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
} from "./userType";
import { Alert, AlertIcon } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { baseUrl } from "../util";

export const getUserDetails = (token) => async (dispatch) => {
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

export const SigningUp = (data) => async (dispatch) => {
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

export const SigningIn = (data) => async (dispatch) => {
  dispatch({
    type: GET_LOGIN_REQUEST,
  });
  try {
    const token = Cookies.get("insta_token");
    const res = await axios.post(`${baseUrl}/users/login`, data, {
      withCredentials: "include",
    });
    dispatch({
      type: GET_LOGIN_SUCCESS,
      payload: data,
    });
    console.log(data);
  } catch (err) {
    dispatch({
      type: GET_LOGIN_ERROR,
    });
  }
};

export const searching = (data) => async (dispatch) => {
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

export const SignOut = (dispatch) => {
  dispatch({ type: SIGN_OUT });
};
