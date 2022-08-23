module.exports = {
  // 智能预设，能够编译es6的语法
  presets: [
    "@babel/preset-env",
    {
      useBuiltIns: "usage", // 实现polyfill的按需加载
      corejs: 3, // 指定corejs的版本
    },
  ],
};
