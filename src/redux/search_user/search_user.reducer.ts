import { GET_SEARCH_USER_ALL_DETAIL_REQUEST } from "./search_user.actionTypes";

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
    _id:""
  },
  searchUserFollower: [],
  searchUserFollowing: [],
  searchUserPosts: [],
};

export const searchUserReducer = (
  state = initialState,
  action: SearchUserAction
) => {
  switch (action.type) {
    case GET_SEARCH_USER_ALL_DETAIL_REQUEST:
      return { ...state };
    default:
      return state;
  }
};
