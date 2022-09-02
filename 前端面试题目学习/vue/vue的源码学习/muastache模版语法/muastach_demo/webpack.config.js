const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    // 将会在dist中生成一个html的模版,
    new HtmlWebpackPlugin({
      // 以原来的模版为基础，去生成
      template: path.resolve(__dirname, "/www/index.html"),
    }),
  ],
  devServer: {
    port: 8080,
    open: true,
    hot: true,
  },
};
