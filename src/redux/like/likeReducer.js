import { GET_POST_LIKES } from "./likeTypes";

const initialState = {
  likes: [],
};
export const likeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POST_LIKES:
      return {
        ...state,
        likes: [...payload],
      };

    default:
      return state;
  }
};
