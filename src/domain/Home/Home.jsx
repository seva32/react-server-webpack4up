import React from "react";
import { Helmet } from "react-helmet-async";
import styles from "./home.scss";

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
      <link rel="canonical" href="https://www.tacobell.com/" />
    </Helmet>
    <h1 className={styles.red}>Home</h1>
  </div>
);

export default Home;
