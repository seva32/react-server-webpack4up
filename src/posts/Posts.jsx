/* eslint-disable arrow-parens */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";

const Posts = ({ posts }) => {
  const [name, setName] = useState("Condition");
  return (
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
      <button type="button" onClick={() => setName("None")}>
        {name}
      </button>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default connect(({ posts }) => ({ posts: posts.list }))(Posts);
