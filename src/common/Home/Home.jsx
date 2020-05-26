import React from "react";
import { Helmet } from "react-helmet-async";

const Home = () => (
  <div>
    <Helmet>
      <title>Home Page</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    <h1>Home</h1>
  </div>
);

export default Home;
