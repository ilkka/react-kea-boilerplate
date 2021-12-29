const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          plugins: ["react-refresh/babel"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
  },
  devServer: {
    hot: "only",
    port: 3000,
    devMiddleware: {
      publicPath: "http://localhost:3000/dist/",
    },
    static: {
      directory: path.join(__dirname, "public/"),
      watch: true,
    },
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devtool: "eval-source-map",
};
