const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 设置多个入口的文件, 多输出
  entry: {
    app: "./src/app.js",
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // webpack的一种命名方式
  },
  plugins: [
    // 将会在dist中生成一个html的模版,
    new HtmlWebpackPlugin({
      // 以原来的模版为基础，去生成
      template: path.resolve(__dirname, "/src/index.html"),
    }),
  ],
  mode: "production",
};
