const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PreloadWebpackPlugin = require("preload-webpack-plugin");
module.exports = {
  // 设置多个入口的文件, 多输出
  entry: {
    app: "./src/app.js",
    main: "./src/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    // 入口文件进行命名
    filename: "[name].js", // webpack的一种命名方式
    // 打包输出的其他的文件进行命名
    chunkFilename: "[name].js",
  },
  plugins: [
    // 将会在dist中生成一个html的模版,
    new HtmlWebpackPlugin({
      // 以原来的模版为基础，去生成
      template: path.resolve(__dirname, "/src/index.html"),
    }),
    new PreloadWebpackPlugin({
      // 实现js资源的预加载
      // rel: "prefetch",
      rel: "preload",
      as: "acript",
    }),
  ],
  optimization: {
    splitChunks: {
      // 等同于这块的配置是通用的配置
      // async（对于异步加载的模块拆分） initial（入口的文件进行拆分） all（两者都进行拆分）
      chunks: "all",
      // 分割代码最小的大小
      minSize: 20000,
      // 确保最后提取的文件的大小不能为0
      minRemainingSize: 0,
      // 至少被引用的次数，满足条件代码才会分割
      minChunks: 1,
      // 按需加载时，最大的文件加载的数量
      maxAsyncRequests: 30,
      // 入口js文件最大的并行加载的文件的数量
      maxInitialRequests: 30,
      // 超过50kb的一定会单独的打包，忽略minSize， minRemainingSize， maxAsyncRequests
      enforceSizeThreshold: 50000,

      // 这一块的配置是个性化的配置，且相同的配置内部会覆盖外部的配置
      // 组，表示的是哪些模块要打包到一个文件中
      cacheGroups: {
        defaultVendors: {
          // 设置需要打包到一起的模块
          test: /[\\/]node_modules[\\/]/,
          // 优先级
          priority: -10,
          // 复用已经打包的模块
          reuseExistingChunk: true,
        },
        // 其他没有写的模块会使用上边的默认的值
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
      cacheGroups: {},
    },
    runtimeChunk: {
      name: (entry) => `runtime-${entry.name}.js`,
    },
  },
  mode: "production",
};
