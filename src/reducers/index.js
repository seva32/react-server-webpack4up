import { combineReducers } from "redux";

import posts from "./postsReducer";
import auth from "./auth";

const rootReducer = combineReducers({ posts, auth });

export default rootReducer;
