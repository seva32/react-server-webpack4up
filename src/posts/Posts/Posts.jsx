/* eslint-disable arrow-parens */
import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";

const Posts = ({ posts }) => (
  <div>
    <Helmet>
      <title>Posters</title>
    </Helmet>
    <h1>Posters</h1>
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
);

Posts.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  posts: PropTypes.array.isRequired,
};

export default connect(({ posts }) => ({ posts: posts.list }))(Posts);
