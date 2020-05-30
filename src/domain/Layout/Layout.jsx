import React from "react";
import { Container } from "semantic-ui-react";
import { NavBar } from "../Navigation";
import CookieConsent from "../Cookies";

const leftItems = [
  { content: "Home", key: "home", to: "/" },
  { content: "Posts", key: "users", to: "/posts" },
];
const rightItems = [
  { content: "Login", key: "login", to: "/signin" },
  { content: "Register", key: "register", to: "/signup" },
];

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
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

export default Layout;
