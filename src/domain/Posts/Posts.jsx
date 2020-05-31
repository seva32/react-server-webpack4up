/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
// import * as Styles from "./Posts.style";
import { Loader } from "../../components";
import { Layout } from "../Layout";
import * as actions from "../../actions";

const Posts = ({ posts, error, getposts }) => {
  useEffect(() => {
    getposts();
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Posts</title>
      </Helmet>
      <h1>Posters</h1>
      {posts && posts.length !== 0 ? (
        <List>
          {posts.map((post) => (
            <List.Item key={post.id}>
              <List.Header>{post.title}</List.Header>A lovely luck
            </List.Item>
          ))}
        </List>
      ) : error && error.length !== 0 ? (
        <div>
          <h4>We could find more posts...</h4>
        </div>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])),
  getposts: PropTypes.func,
  error: PropTypes.string,
};
Posts.defaultProps = {
  posts: [],
  getposts: () => {},
  error: "",
};

export default connect(
  ({ posts }) => ({ posts: posts.list, error: posts.error }),
  actions
)(Posts);
