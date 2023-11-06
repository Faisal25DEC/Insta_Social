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

const initialState = {
  isAuth: false,
  error: false,
  login_user: {},
  search_results: [],
  login_following: [],
  unfollowedUsers: [],
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_SIGNUP_REQUEST:
      return {
        ...state,
      };
    case GET_SIGNUP_SUCCESS:
      return {
        ...state,
      };
    case GET_SIGNUP_ERROR:
      return {
        ...state,
      };
    case GET_LOGIN_REQUEST:
      return {
        ...state,
      };
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        login_user: payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuth: false,
      };
    case SEARCH:
      return {
        ...state,
        search_results: payload,
      };
    case GET_LOGIN_ERROR:
      return {
        ...state,
      };
    case UNFOLLOWED_USERS: {
      return {
        ...state,
        unfollowedUsers: [...payload],
      };
    }
    default:
      return state;
  }
};
export default userReducer;
