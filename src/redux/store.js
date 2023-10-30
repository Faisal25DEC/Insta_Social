import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import UserReducer from "./user/userReducer";
const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({UserReducer});
export const store = legacy_createStore(rootReducer, middleware);