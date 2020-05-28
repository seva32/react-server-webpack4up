/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { connect } from "react-redux";
import { List } from "semantic-ui-react";
import * as Styles from "./Posts.style";

const Posts = ({ posts }) => {
  const [name, setName] = useState("Condition");
  return (
    <div>
      <Helmet>
        <title>Post</title>
      </Helmet>
      <h1>Posters</h1>
      <List>
        {posts.map((post) => (
          <List.Item key={post.id}>
            <List.Header>{post.title}</List.Header>A lovely fucker
          </List.Item>
        ))}
      </List>
      <Styles.StyledButton type="button" onClick={() => setName("None")}>
        {name}
      </Styles.StyledButton>
    </div>
  );
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
};

export default connect(({ posts }) => ({ posts: posts.list }))(Posts);
