import {
  POST_COMMENTS_FAILURE,
  POST_COMMENTS_LOADING,
  POST_COMMENTS_SUCCESS,
} from "./commentTypes";

const initialState = {
  blogComments: [],
  blogCommentsLoading: false,
  blogCommentsError: false,
};

export const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_COMMENTS_LOADING: {
      return {
        ...state,
        blogCommentsLoading: true,
      };
    }
    case POST_COMMENTS_SUCCESS: {
      return {
        ...state,
        blogCommentsLoading: false,
        blogCommentsError: false,
        blogComments: [...payload],
      };
    }
    case POST_COMMENTS_FAILURE: {
      return {
        ...state,
        blogCommentsError: true,
      };
    }
    default: {
      return state;
    }
  }
};
