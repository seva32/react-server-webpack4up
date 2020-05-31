import { GET_POSTS, GET_POSTS_ERROR } from "../actions/types";

const initialState = {
  list: [],
  error: "",
};

function postsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, list: [...state.list, ...action.payload] };
    case GET_POSTS_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

export default postsReducer;
