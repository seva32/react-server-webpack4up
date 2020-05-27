// eslint-disable-next-line import/no-extraneous-dependencies
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const config = require("./webpack.config");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  devtool: "source-map",

  entry: config.entry,

  resolve: config.resolve,

  output: config.output,

  mode: "production",

  plugins: [
    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   output: { comments: false },
    // }),
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
      minify: { collapseWhitespace: true },
    }),
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
