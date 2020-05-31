/* eslint-disable no-unused-vars */
import axios from "axios";
import { AUTH_USER, AUTH_ERROR, GET_POSTS, GET_POSTS_ERROR } from "./types";
// formProps = { email, password }
export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/signup",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Email in use" });
  }
};

export const signout = () => {
  localStorage.removeItem("token");
  return {
    type: AUTH_USER,
    payload: "",
  };
};

export const signin = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/signin",
      formProps
    );
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: "Invalid login credentials" });
  }
};

export const getposts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "http://jsonplaceholder.typicode.com/posts?_start=0&_limit=5"
    );
    dispatch({ type: GET_POSTS, payload: data });
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, payload: "Error fetching posts." });
  }
};
