const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const mainEntry = path.join(__dirname, "src/index.js");
module.exports = {
  entry: {
    main: mainEntry,
    //do not create entry point for vendors
    //vendor: ["react", "react-dom"],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      //chunks: "all",
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
          //priority: -10,
        },
      },
    },
  },
  devtool: isProduction ? "source-map" : "inline-source-map",
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].[contenthash].bundle.js",
    publicPath: "/",
  },
  // webpack 5 comes with devServer which loads in development mode

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      appComponents: path.resolve(__dirname, "src/components/"),
    },
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // options: {
          //   presets: ["@babel/preset-react"],
          // },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html", inject: true }),
  ],
};
