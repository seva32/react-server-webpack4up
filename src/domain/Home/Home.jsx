/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { Helmet } from "react-helmet-async";
import { useCookies } from "react-cookie";
import styles from "./home.scss";
import { useAppContext } from "../../context";
import { FormUI } from "../../components";
import * as Styles from "./Home.style";

const Home = () => {
  const [cookies, setCookie] = useCookies(["name"]);

  const appContext = useAppContext();

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
          {cookies.name ? `Hello ${cookies.name}!` : "Hello"}
        </button>
      </div>
      <button
        aria-label="ctx test"
        id="button-id-ctx"
        type="button"
        onClick={() => appContext.appData.changeName("Seb")}
      >
        {appContext.appData.name}
      </button>
      <Styles.StyledContainer>
        <FormUI />
      </Styles.StyledContainer>
    </div>
  );
};

export default Home;
