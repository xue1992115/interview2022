const path = require("path");
const os = require("os");
// const { extendDefaultPlugins } = require("svgo");
// 插件需要引入才能使用
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
// const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const threads = os.cpus().length;

// 封装loader
function getStyleLoader(pre) {
  return [
    MiniCssExtractPlugin.loader,
    "css-loader",
    {
      loader: "postcss-loader",
      options: {
        postcssOptions: {
          plugins: ["postcss-preset-env"], // 能解决大多数的兼容性问题
        },
      },
    },
    pre,
  ].filter(Boolean);
}
// commonjs规范
module.exports = {
  entry: "./src/main.js",
  output: {
    // 所有文件的输出目录
    path: path.resolve(__dirname, "../dist"),
    filename: "static/js/main.js",
    // 打包前清空之前的资源
    clean: true,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.css$/,
            use: getStyleLoader(),
          },
          {
            test: /\.less$/,
            // loader: "less-loader",
            use: getStyleLoader("less-loader"),
          },
          {
            test: /\.s[ac]ss$/,
            use: getStyleLoader("sass-loader"),
          },
          {
            test: /\.styl$/,
            use: getStyleLoader("stylus-loader"),
          },
          // 图片资源的配置
          {
            test: /\.(png|jpe?g|gif|webp)$/,
            type: "asset",
            parser: {
              // 小于10k的转换成base64
              dataUrlCondition: {
                maxSize: 10 * 1024,
              },
            },
            generator: {
              // 定义图片输出的name
              filename: "static/images/[hash:8][ext][query]",
            },
          },
          // 处理字体/各种媒体
          {
            test: /\.(ttf|woff2?|mp3|mp4|avi)$/,
            type: "asset/resource", // 不会转base64
            generator: {
              filename: "static/media/[hash:8][ext][query]",
            },
          },
          // 处理js文件
          {
            test: /\.js$/,
            // 排除哪些文件不处理
            exclude: /(node_modules|bower_components)/,
            include: path.resolve(__dirname, "src"), // 只处理src文件，其他文件就不处理了
            use: [
              {
                loader: "thread-loader",
                options: {
                  workers: threads, // 开启多个进程
                },
              },
              {
                loader: "babel-loader",
                // use: {
                // 可以在里边写，也可以创建一个babel.config.js的配置文件
                // options: {
                //   presets: ["@babel/preset-env"],
                // },
                // },
                options: {
                  cacheDirectory: true, // 开启babel缓存
                  cacheCompression: false, // 关闭缓存的压缩
                  plugins: ["@bable/plugin-transform-runtime"],
                },
              },
            ],
          },
        ],
      },
    ],
  },
  devtool: "source-map",
  plugins: [
    // js代码规范
    new ESLintPlugin({
      context: path.resolve(__dirname, "../src"),
      cache: true,
      cacheLocation: path.resolve(
        __dirname,
        "../node_modules/.cache/eslintcache"
      ),
    }),
    // 将会在dist中生成一个html的模版,
    new HtmlWebpackPlugin({
      // 以原来的模版为基础，去生成
      template: path.resolve(__dirname, "../index.html"),
    }),
    // 提取css资源
    new MiniCssExtractPlugin({
      filename: "static/css/main.css",
    }),
    // css文件资源进行压缩
    new CssMinimizerPlugin(),
    // 压缩js
    new TerserWebpackPlugin({
      parallel: threads,
    }),
    // 压缩图片 下载依赖会报错的
    // new ImageMinimizerPlugin({
    //   minimizerOptions: {
    //     // Lossless optimization with custom option
    //     // Feel free to experiment with options for better result for you
    //     plugins: [
    //       ["gifsicle", { interlaced: true }],
    //       ["jpegtran", { progressive: true }],
    //       ["optipng", { optimizationLevel: 5 }],
    //       // Svgo configuration here https://github.com/svg/svgo#configuration
    //       [
    //         "svgo",
    //         {
    //           plugins: extendDefaultPlugins([
    //             {
    //               name: "removeViewBox",
    //               active: false,
    //             },
    //             {
    //               name: "addAttributesToSVGElement",
    //               params: {
    //                 attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
    //               },
    //             },
    //           ]),
    //         },
    //       ],
    //     ],
    //   },
    // }),
  ],
  mode: "production",
};
