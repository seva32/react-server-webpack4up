const React = require("react");
const { HelmetProvider } = require("react-helmet-async");

const helmetContext = {};

function appWrapp() {
  return <HelmetProvider context={helmetContext}></HelmetProvider>;
}

module.exports = { helmetContext, appWrapp };
