/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
} from "semantic-ui-react";

const SignupFormUI = () => (
  <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as="h2" color="teal" textAlign="center">
        <Image src="#" alt="No logo image" />
        Sign up for a new account
      </Header>
      <Form size="large">
        <Segment stacked>
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="red" fluid size="large">
            Sign Up
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have an account? <Link to="/signin">Sign In</Link>
      </Message>
    </Grid.Column>
  </Grid>
);

export default SignupFormUI;
