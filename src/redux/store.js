import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import UserReducer from "./user/userReducer";
import { followerReducer } from "./follower/followerReducer";
import { commentReducer } from "./comment/commentReducer";
import { postReducer } from "./post/postReducer";
import { likeReducer } from "./like/likeReducer";
const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
  UserReducer,
  followerReducer,
  commentReducer,
  postReducer,
  likeReducer,
});
export const store = legacy_createStore(rootReducer, middleware);
