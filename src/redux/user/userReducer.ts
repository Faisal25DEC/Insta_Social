import {
  GET_LOGIN_SUCCESS,
  IInitialState,
  ILoginUser,
  ILoginUserAction,
  ISearchUsersAction,
  ISignOutAction,
  IUnfollowedUsersAction,
  SEARCH,
  SIGN_OUT,
  UNFOLLOWED_USERS,
} from "./userType";

const initialState: IInitialState = {
  isAuth: false,
  error: false,
  login_user: {} as ILoginUser,
  search_results: [],
  login_following: [],
  unfollowedUsers: [],
};

type IAction =
  | IUnfollowedUsersAction
  | ILoginUserAction
  | ISignOutAction
  | ISearchUsersAction;

const userReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case GET_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        login_user: payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuth: false,
      };
    case SEARCH:
      return {
        ...state,
        search_results: payload,
      };

    case UNFOLLOWED_USERS: {
      return {
        ...state,
        unfollowedUsers: [...payload],
      };
    }
    default:
      return state;
  }
};
export default userReducer;
