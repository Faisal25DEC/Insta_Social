import { GET_POSTS } from "./postTypes";

const initialState = {
  posts: [],
  post: null,
};

export const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [...payload],
      };

    default:
      return state;
  }
};
