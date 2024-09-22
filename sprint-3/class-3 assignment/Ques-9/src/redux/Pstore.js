import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import { combineReducers } from "redux";
import ProductReducer from "./reducer/productReducer";

export const rootReducer = combineReducers({
  products: ProductReducer, // products state handled by ProductReducer
});

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;