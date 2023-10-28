import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({});
export const store = legacy_createStore(rootReducer, middleware);
