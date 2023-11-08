import { GET_POSTS, IGetPostAction, IGetPostsAction } from "./postTypes";

const initialState = {
  posts: [],
  post: null,
};

type Action = IGetPostsAction | IGetPostAction;
export const postReducer = (
  state = initialState,
  { type, payload }: Action
) => {
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
