/* eslint-disable no-underscore-dangle */
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import { CookiesProvider } from "react-cookie";

import App from "./App";
import store from "./store";
import rootReducer from "./reducers";
import { theme } from "./utils/styles/theme";
import { GlobalStyle } from "./utils/styles/global";

function render(Root) {
  ReactDOM.hydrate(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <HelmetProvider>
            <CookiesProvider>
              <BrowserRouter>
                <Root />
              </BrowserRouter>
            </CookiesProvider>
          </HelmetProvider>
        </Provider>
      </ThemeProvider>
    </AppContainer>,
    document.getElementById("root")
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./App.jsx", () => {
    render(App);
  });

  module.hot.accept("./reducers/index.js", () => {
    store.replaceReducer(rootReducer);
  });
}
