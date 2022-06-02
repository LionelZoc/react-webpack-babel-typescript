const { merge } = require("webpack-merge");
const { join, resolve } = require("path");
const common = require("./webpack.config.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//const CircularDependencyPlugin = require("circular-dependency-plugin");
//const webpack = require("webpack");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  // output: {
  //   path: join(__dirname, "/dist"),
  //   filename: "[name].bundle.js",
  //   //publicPath: "/",
  // },
  // resolve: {
  //   alias: {
  //     "react-dom$": "react-dom/profiling",
  //     "react-redux": "react-redux/lib",
  //   },
  // },
  devServer: {
    port: 3001,
    static: resolve(__dirname, "dist"),
    hot: true,
    historyApiFallback: true,
    liveReload: false,
    allowedHosts: "all",
    client: {
      overlay: {
        errors: true,
      },
    },
  },
  // devServer: {
  //   //hot: true,
  //   hot: true,
  //   liveReload: false,
  //   historyApiFallback: true,
  //   allowedHosts: "all", //disableHostCheck: true,
  //   port: 8080,
  //   static: {
  //     directory: join(__dirname, "src"),
  //   },
  //   client: {
  //     overlay: {
  //       errors: true,
  //     },
  //   },
  // },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
      cleanStaleWebpackAssets: false,
    }),
    // new CircularDependencyPlugin({
    //   // exclude detection of files based on a RegExp
    //   exclude: /a\.js|node_modules/,
    //   // include specific files based on a RegExp
    //   include: /src/,
    //   // add errors to webpack instead of warnings
    //   failOnError: false,
    //   // allow import cycles that include an asyncronous import,
    //   // e.g. via import(/* webpackMode: "weak" */ './file.js')
    //   allowAsyncCycles: true,
    //   // set the current working directory for displaying module paths
    //   cwd: process.cwd(),
    // }),
  ],
});
