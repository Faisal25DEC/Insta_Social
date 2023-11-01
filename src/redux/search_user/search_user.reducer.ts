import {
  GET_SEARCH_USER_ALL_DETAIL_REQUEST,
  GET_SEARCH_USER_ALL_DETAIL_REQUEST_SUCCESS,
} from "./search_user.actionTypes";

interface SearchUserAction {
  type: string;
  payload: any;
}

const initialState = {
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
    default:
      return state;
  }
};
