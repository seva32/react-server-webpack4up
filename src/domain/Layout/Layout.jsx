import React, { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import { connect } from "react-redux";
import { NavBar } from "../Navigation";
import CookieConsent from "../Cookies";

// eslint-disable-next-line react/prop-types
function Layout({ children, authenticated }) {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);
  useEffect(() => {
    if (authenticated) {
      setLeftItems([
        { content: "Home", key: "home", to: "/" },
        { content: "Posts", key: "users", to: "/posts" },
      ]);
      setRightItems([{ content: "Signout", key: "signout", to: "/signout" }]);
    } else {
      setLeftItems([{ content: "Home", key: "home", to: "/" }]);
      setRightItems([
        { content: "Login", key: "login", to: "/signin" },
        { content: "Register", key: "register", to: "/signup" },
      ]);
    }
  }, [authenticated]);

  return (
    <>
      <Container>
        <NavBar leftItems={leftItems} rightItems={rightItems}>
          <CookieConsent style={{ zIndex: "10" }} />
          {children}
        </NavBar>
      </Container>
    </>
  );
}

export default connect(({ auth }) => ({ authenticated: auth.authenticated }))(
  Layout
);
