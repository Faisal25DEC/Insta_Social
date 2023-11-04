import {
  GET_SEARCH_USER_ALL_DETAIL_REQUEST,
  GET_SEARCH_USER_ALL_DETAIL_REQUEST_SUCCESS,
  USER_ALL_LOADING_FALSE,
  USER_ALL_LOADING_TRUE,
} from "./search_user.actionTypes";

interface SearchUserAction {
  type: string;
  payload: any;
}

const initialState = {
  isAllLoading:false,
  searchUserDetail: {
    profileImage: "",
    userName: "",
    name: "",
    bio: "",
    _id: "",
  },
  searchUserFollower: [],
  searchUserFollowing: [],
  searchUserPosts: [],
  loginUserFollowing: [],
};

export const searchUserReducer = (
  state = initialState,
  { type, payload }: SearchUserAction
) => {
  switch (type) {
    case GET_SEARCH_USER_ALL_DETAIL_REQUEST_SUCCESS:
      return {
        ...state,
        searchUserDetail: payload.userResponse,
        searchUserPosts: payload.postResponse,
        searchUserFollower:payload.followers,
        searchUserFollowing:payload.following,
      };
    case "LOGIN_USER_FOLLOWING":
      return {
        ...state,
        loginUserFollowing:payload
      };
    case USER_ALL_LOADING_TRUE:
      return {
        ...state,
        isAllLoading:true
      };
    case USER_ALL_LOADING_FALSE:
      return {
        ...state,
        isAllLoading:false
      };
    default:
      return state;
  }
};
