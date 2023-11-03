import {
  POST_COMMENTS_FAILURE,
  POST_COMMENTS_LOADING,
  POST_COMMENTS_SUCCESS,
} from "./commentTypes";

const initialState = {
  postComments: [],
  postCommentsLoading: false,
  postCommentsError: false,
};

export const commentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_COMMENTS_LOADING: {
      return {
        ...state,
        postCommentsLoading: true,
      };
    }
    case POST_COMMENTS_SUCCESS: {
      return {
        ...state,
        postCommentsLoading: false,
        postCommentsError: false,
        postComments: [...payload],
      };
    }
    case POST_COMMENTS_FAILURE: {
      return {
        ...state,
        postCommentsError: true,
      };
    }
    default: {
      return state;
    }
  }
};
