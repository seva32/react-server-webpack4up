import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import logger from "redux-logger";
import reducers from "../reducers";

// eslint-disable-next-line no-underscore-dangle
const configureStore = (initialState = window.__PRELOADED_STATE__ || {}) => {
  const enhancer = compose(applyMiddleware(reduxPromise, reduxThunk, logger));
  return createStore(reducers, initialState, enhancer);
};
const store = configureStore({});
export default store;
