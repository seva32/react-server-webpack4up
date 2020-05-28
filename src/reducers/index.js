import { combineReducers } from "redux";

import posts from "../domain/Posts/postsReducer";

const rootReducer = combineReducers({ posts });

export default rootReducer;
