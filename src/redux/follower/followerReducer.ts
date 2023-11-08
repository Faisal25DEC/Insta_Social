import {
  GET_FOLLOWERS_FOLLOWING,
  IGetFollowersFollowingAction,
} from "./followerTypes";

const initialState = {
  followers: [],
  following: [],
};

type Action = IGetFollowersFollowingAction;

export const followerReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case GET_FOLLOWERS_FOLLOWING: {
      return {
        ...state,
        followers: payload.followers,
        following: payload.following,
      };
    }
    default: {
      return state;
    }
  }
};
