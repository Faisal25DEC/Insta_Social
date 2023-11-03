import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({ userReducer });
export const store = legacy_createStore(rootReducer, middleware);
