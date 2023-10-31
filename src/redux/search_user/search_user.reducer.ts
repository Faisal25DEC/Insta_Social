import { GET_SEARCH_USER_ALL_DETAIL } from './search_user.actionTypes';


interface SearchUserAction {
  type: string;
  payload: any; 
}

const initialState = {
  searchUserDetail: {},
  searchUserFollower: [],
  searchUserFollowing: [],
  searchUserPosts: [],
};

export const searchUserReducer = (state = initialState, action: SearchUserAction) => {
  switch (action.type) {
    case GET_SEARCH_USER_ALL_DETAIL:
     return {...state}
    default:
      return state;
  }
};
