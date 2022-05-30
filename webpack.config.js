const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  entry: "./src/index.js",
  devtool: isProduction ? "source-map" : "inline-source-map",
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3001,
    static: path.resolve(__dirname, "dist"),
    hot: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    // alias: {
    //   appComponents: path.resolve(__dirname, "src/components/"),
    // },
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/index.html" })],
};
