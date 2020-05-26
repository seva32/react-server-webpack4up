import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";

const Posts = ({ posts }) => (
  <div>
    <Helmet>
      <title>Poster</title>
    </Helmet>
    <h1>Posts Page</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default connect(({ posts }) => ({ posts: posts.list }))(Posts);
