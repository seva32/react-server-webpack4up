require("dotenv").config({ silent: true });

const webpack = require("webpack");
// eslint-disable-next-line import/no-extraneous-dependencies
const path = require("path");

module.exports = {
  entry: {
    vendor: ["semantic-ui-react"],
    app: [path.resolve("src/index.jsx")],
  },

  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".js", ".jsx"],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "development", // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false,
    }),
    new webpack.optimize.ModuleConcatenationPlugin(), // disable module processing in Babel
    // "presets": [{"modules": false }]
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ],
  },
};
