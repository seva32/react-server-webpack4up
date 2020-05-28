/* eslint-disable no-underscore-dangle */
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";

import App from "./App";
import rootReducer from "./components/rootReducer";
import { theme } from "./utils/styles/theme";
import { GlobalStyle } from "./utils/styles/global";

const store = createStore(rootReducer, window.__PRELOADED_STATE__);

function render(Root) {
  ReactDOM.hydrate(
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <HelmetProvider>
            <BrowserRouter>
              <Root />
            </BrowserRouter>
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

  module.hot.accept("./components/rootReducer", () => {
    store.replaceReducer(rootReducer);
  });
}
