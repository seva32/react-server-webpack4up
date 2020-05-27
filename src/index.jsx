/* eslint-disable no-underscore-dangle */
import { AppContainer } from "react-hot-loader";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import App from "./common/App/App";
import rootReducer from "./common/rootReducer";

const store = createStore(rootReducer, window.__PRELOADED_STATE__);

function render(Root) {
  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <HelmetProvider>
          <BrowserRouter>
            <Root />
          </BrowserRouter>
        </HelmetProvider>
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );
}

render(App);

if (module.hot) {
  module.hot.accept("./common/App/App", () => {
    render(App);
  });

  module.hot.accept("./common/rootReducer", () => {
    store.replaceReducer(rootReducer);
  });
}
