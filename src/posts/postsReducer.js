const initialState = {
  list: [
    { id: "one", title: "yahoo" },
    { id: "two", title: "yahoo" },
    { id: "tres", title: "yahoo" },
  ],
};

function postsReducer(state = initialState, action) {
  switch (action) {
    default:
      return state;
  }
}

export default postsReducer;
