import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { GET_SEARCH_USER_ALL_DETAIL_REQUEST } from "./search_user.actionTypes";

export const getUserAllDetailAction = (): ThunkAction<void, {}, {}, Action<string>> => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_SEARCH_USER_ALL_DETAIL_REQUEST, payload: 12 });
    } catch (error) {
     
    }
  };
};