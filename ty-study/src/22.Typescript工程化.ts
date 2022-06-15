// 1、代码检测
// 代码检测工具主要是检测代码风格
// 缩进应该是四个空格还是两个空格？
// 是否应该禁用 var？
// 接口名是否应该以 I 开头？
// 是否应该强制使用 === 而不是 ==？

// 2、代码检测工具
// TSLint和ESLint
// 结果也比较明显，虽然现在现存的 TypeScript 项目依然是以 TSLint 为主，但是如果面向未来的话，ESLint 显然是我们的首选。
// 随着 TSLint 被作者放弃维护，加之 TSLint 作者加入 ESlint 为其提供 ESLint + TypeScript 的优化，实际上 ESLint 的短板在逐渐被补齐，加上 ESLint 一向固有的优势， ESLint 单从强大程度依然是压过 TSLint 的。


// 3、ESLint的使用规范
// 全局安装
// npm install -g eslint
// 初始化配置文件
// eslint --init
// 局部安装
// npm install eslint --save-dev
// 初始化配置文件
// ./node_modules/.bin/eslint --init
// 初始化完成之后机会出现一个.eslintrc.js配置文件
module.exports = {
    // 这个配置项用于指定环境，每个环境都有自己预定义的全局变量，可以同时指定多个环境，不矛盾。
    env: {
      browser: true,
      es6: true,
      node: true,
    },
    // 我们的 extends 就继承了 Airbnb 的配置规则。
    // 在继承了其他配置规则后我们依然可以对继承的规则进行修改、覆盖和拓展：

    extends: [
      'airbnb-base',
    ],
    // 脚本在执行期间访问的额外的全局变量
    // 通常情况下 ESLint 会对非源文件的全局变量进行警告，比如你可以访问浏览器环境下的 window 全局变量，这是没问题的，但是你自己创造一个全局变量，这个时候 ESLint 会向你发出警告。
    // 比如我们我们需要一个全局变量 Atomics，在 globals 配置项声明后还需要设置一个值，这个值代表了此全局变量是可以被修改的还是只读的，如果是可写的，那么值为 writable，否则为 readonly
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    // ESLint 默认使用Espree作为其解析器，你可以在配置文件中指定一个不同的解析器。
    // 由于我们的项目是 TypeScript 的，所以就用上了 TypeScript 团队与 ESLint 联合发布的 typescript-eslint 解析器，它非常好地兼容了 TypeScript 和 eslint 的解析特性。
    // 除此之外还有其他的解析器可供我们选择：
    // Esprima
    // Babel-ESLint - 一个对Babel解析器的包装，使其能够与 ESLint 兼容
    parser: '@typescript-eslint/parser',
    // 解析的配置参数，我们虽然已经制定了解析器，但是解析器要想适用当前的环境也需要一定的配置。
    parserOptions: {
    // 指定ecma的版本
      ecmaVersion: 2018,
      ecmafeatures: {
        //允许在全局作用域下使用return语句
        globalReturn: false,
        //启用全局strict模式（严格模式）
        impliedStrict: false,
        //启用JSX
        jsx: false,
        //启用对实验性的objectRest/spreadProperties的支持
        experimentalObjectRestSpread: false
      },
      sourceType: 'module',
    },
    // 插件
    // 使用插件之前，需要通过npm安装包
    plugins: [
      '@typescript-eslint',
    ],
    // 具体规则的设置，
    rules: {
    },
  };
// 值得说的是配置文件不仅仅是.js
// 也可以是.eslintrc.yaml、.eslintrc.yml、.eslintrc.json、.eslintrc、也可以在package.json中定义一个eslintConfig，在那里定义
// 4、查看lex中的使用的eslint的规范
