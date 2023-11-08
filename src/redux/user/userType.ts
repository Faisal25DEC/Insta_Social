export const GET_SIGNUP_REQUEST = "GET_SIGNUP_REQUEST";

export const GET_SIGNUP_SUCCESS = "GET_SIGNUP_SUCCESS";
export const GET_SIGNUP_ERROR = "GET_SIGNUP_ERROR";

export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_ERROR = "GET_LOGIN_ERROR";

export const SIGN_OUT = "SIGN_OUT";

export const SEARCH = "SEARCH";
export const FOLLOWING = "FOLLOWING";

export const UNFOLLOWED_USERS = "UNFOLLOWED_USERS";

export interface ILoginUser {
  _id: string;
  name: string;
  userName: string;
  profileImage: string;
  bio: string;
}

export interface IInitialState {
  isAuth: boolean;
  error: boolean;
  login_user: ILoginUser;
  search_results: ILoginUser[];
  login_following: ILoginUser[];
  unfollowedUsers: ILoginUser[];
}

export interface ILoginUserAction {
  type: "GET_LOGIN_SUCCESS";
  payload: ILoginUser;
}

export interface IUnfollowedUsersAction {
  type: "UNFOLLOWED_USERS";
  payload: ILoginUser[];
}

export interface ISearchUsersAction {
  type: "SEARCH";
  payload: ILoginUser[];
}

export interface ISignOutAction {
  type: "SIGN_OUT";
  payload: null;
}
