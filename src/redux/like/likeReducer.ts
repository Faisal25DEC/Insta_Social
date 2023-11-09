import { GET_POST_LIKES, IGetLikesAction } from "./likeTypes";

const initialState: { likes: string[] } = {
  likes: [] as string[],
};

type Action = IGetLikesAction;
export const likeReducer = (
  state = initialState,
  { type, payload }: Action
) => {
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
