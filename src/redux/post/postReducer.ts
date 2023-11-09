import { GET_POSTS, IGetPostAction, IGetPostsAction, IPost } from "./postTypes";

const initialState: { posts: IPost[]; post: IPost } = {
  posts: [] as IPost[],
  post: {} as IPost,
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
