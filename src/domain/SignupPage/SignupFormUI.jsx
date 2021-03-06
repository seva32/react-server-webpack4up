/* eslint-disable indent */
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
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import imagePath from "../../assets/images/logo192.png";
import { Layout } from "../Layout";
import * as actions from "../../actions";

// eslint-disable-next-line react/prop-types
const SignupFormUI = ({ errorMessage, signup, history }) => {
  const formik = useFormik({
    initialValues: {
      password: "",
      repeatpassword: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
      // .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      repeatpassword: Yup.string().when("password", {
        is: (val) => val && val.length > 0,
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Both password need to be the same"
        ),
      }),
    }),
    onSubmit: (values, { setStatus, resetForm }) => {
      signup(values, () => {
        // eslint-disable-next-line react/prop-types
        history.push("/");
      });
      resetForm({});
      setStatus({ success: true });
    },
  });
  return (
    <Layout>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src={imagePath} alt="No logo image" />
            Sign up for a new account
          </Header>
          <Form size="large">
            <Segment>
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={
                  formik.touched.email && formik.errors.email
                    ? {
                        content: formik.errors.email,
                        pointing: "below",
                      }
                    : null
                }
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={
                  formik.touched.password && formik.errors.password
                    ? {
                        content: formik.errors.password,
                        pointing: "below",
                      }
                    : null
                }
              />
              <Form.Input
                fluid
                icon="repeat"
                iconPosition="left"
                placeholder="Reenter Password"
                type="password"
                id="repeatpassword"
                name="repeatpassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.repeatpassword}
                error={
                  formik.touched.repeatpassword && formik.errors.repeatpassword
                    ? {
                        content: formik.errors.repeatpassword,
                        pointing: "below",
                      }
                    : null
                }
              />

              <Button color="red" fluid size="large">
                Sign Up
              </Button>
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/signin">Sign In</Link>
          </Message>
          {errorMessage || "no hiciste error"}
        </Grid.Column>
      </Grid>
    </Layout>
  );
};

SignupFormUI.propTypes = {
  errorMessage: PropTypes.string,
  signup: PropTypes.func,
};

SignupFormUI.defaultProps = {
  errorMessage: "",
  signup: () => {},
};

export default connect(
  ({ auth }) => ({ errorMessage: auth.errorMessage }),
  actions
)(SignupFormUI);
