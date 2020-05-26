const path = require("path");
const config = require("./webpack.config");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  devtool: "#eval-source-map",

  entry: {
    app: path.resolve("src/common/App/App"),
    rootReducer: path.resolve("src/common/rootReducer"),
  },

  mode: "none",

  resolve: config.resolve,

  output: Object.assign({}, config.output, {
    filename: "[name].server.js",
    libraryTarget: "commonjs",
  }),

  // externals: ["react-helmet"],

  plugins: [
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
    ...config.plugins,
  ],

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
            },
          },
          "css-loader",
          "postcss-loader",
        ],
      },
      ...config.module.rules,
    ],
  },
};
