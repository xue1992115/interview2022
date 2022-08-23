module.exports = {
  // 继承其他规则
  // 规则一条一条写太费劲了
  // 比较有名的就是
  // eslint:recommend 不需要下载
  // vue的规则plugin:vue/essential 需要下载
  // react的规则react-app 需要下载
  extends: ["eslint:recommended"],
  //解析选项
  parserOptions: {
    // 按照哪个语法版本去检查
    ecmaVersion: 6,
    // ES6的模块化
    sourceType: "module",
    ecmaFeatures: {
      // 如果是react，就要启用jsx的语法
      jsx: true,
    },
  },
  // 具体的检查规则
  // 0=off关闭 1=warn警告 2=error报错
  rules: {
    "no-var": 2,
  },
  env: {
    browser: true,
    node: true,
  },
};
