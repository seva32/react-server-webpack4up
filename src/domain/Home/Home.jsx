/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Helmet } from "react-helmet-async";
import { useCookies } from "react-cookie";
import styles from "./home.scss";

const Home = () => {
  const [cookies, setCookie] = useCookies(["name"]);

  function onClick(newName) {
    setCookie("name", newName, { path: "/" });
  }

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <h1 className={styles.red}>Home</h1>
      <div>
        <button
          aria-label="cookie test"
          id="button-id"
          type="button"
          onClick={() => onClick("Tett")}
        >
          {cookies.name && `Hello ${cookies.name}!`}
        </button>
      </div>
    </div>
  );
};

export default Home;
