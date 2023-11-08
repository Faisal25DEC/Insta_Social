import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import { followerReducer } from "./follower/followerReducer";
import { commentReducer } from "./comment/commentReducer";
import { postReducer } from "./post/postReducer";
import { likeReducer } from "./like/likeReducer";
import { searchUserReducer } from "./search_user/search_user.reducer";
const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
  userReducer,
  followerReducer,
  commentReducer,
  postReducer,
  likeReducer,
  searchUserReducer,
});
export const store = legacy_createStore(rootReducer, middleware);

export type State = ReturnType<typeof rootReducer>;
