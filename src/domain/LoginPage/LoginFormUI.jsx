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

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address"),
      // .required("Required"),
      password: Yup.string().password("Invalid password"),
    }),
    onSubmit: (values, { setStatus, resetForm }) => {
      // eslint-disable-next-line no-console
      console.log(...Object.values(values));
      resetForm({});
      setStatus({ success: true });
    },
  });
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="#" alt="No logo image" />
          Log-in to your account
        </Header>
        <Form onSubmit={formik.handleSubmit} size="large">
          <Segment stacked>
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

            <Button color="red" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
