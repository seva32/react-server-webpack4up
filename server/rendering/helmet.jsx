const React = require("react");
const { HelmetProvider } = require("react-helmet-async");

const helmetContext = {};

function appWrapp(props) {
  return (
    <HelmetProvider
      context={helmetContext}
      {...props.children}
    ></HelmetProvider>
  );
}

module.exports = { helmetContext, appWrapp };
