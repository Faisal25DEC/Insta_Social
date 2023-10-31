import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { searchUserReducer } from "./search_user/search_user.reducer";
const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({searchUserReducer});
export const store = legacy_createStore(rootReducer, middleware);