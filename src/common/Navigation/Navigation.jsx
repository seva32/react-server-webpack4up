import React from "react";
import { NavLink } from "react-router-dom";
import { List } from "semantic-ui-react";

const Navigation = () => (
  <List link>
    <List.Item as={NavLink} exact to="/">
      Home
    </List.Item>
    <List.Item as={NavLink} exact to="/posts">
      Posts
    </List.Item>
  </List>
);

export default Navigation;
