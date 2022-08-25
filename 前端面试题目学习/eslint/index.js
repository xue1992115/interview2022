// eslint
// 1、安装
// npm install eslint --save -D
// 2、创建初始化的文件
// .eslintrc.js/ .eslintrc.json / package.json中增加eslintConfig
// 3、配置
// off： 0 关闭规则
// warn：1 警告
// error：2 报错
// 4、详细配置
// Environments，指定脚本运行的环境，每种环境都有一组特定的预定义全局变量。
// Globals，脚本在执行期间访问的额外的全局变量。
// Rules， 启用的规则及其各自的错误级别

// 5、parser options
// 如果想要指定支持的javascript语言选项，默认情况下，ESLint 支持 ECMAScript 5 语法；
// 你可以覆盖该设置，以启用对 ECMAScript 其它版本和 JSX 的支持。
{
    "env": {
        "browser": true,
        "node": true
    },
    // extends继承一系列的核心规则
    "extends": "eslint:recommended",
    // 指定解析器，默认的是Espree
    "parser": "esprima",
    "parserOptions": {
        // 指定js的语言选项，默认是3，5，如果要支持高版本的需要指定
        "ecmaVersion": 6,
        // 设置为 "script" (默认) 或 "module"（如果你的代码是 ECMAScript 模块)。
        "sourceType": "module",
        // 表示想使用的额外的语言特性
        "ecmaFeatures": {
            // 允许在全局作用域下使用return语句
            "globalReturn": true,
            // 启用全局model模式
            "impliedStrict": true,
            // 启用JSX
            "jsx": true,
            // 启用试验性的属性
            "experimentalObjectRestSpread": true
        }
    },
    // rules可以自定义规则
    "rules": {
        "semi": "error"
    },
    // 定义全局的变量
    "globals": {
        "var1": "writable",
        "var2": "readonly"
    }
}

// 6、eslint的兼容
// Babel-ESLint 是一个babel解析器的包装，使其能够与 ESLint 兼容。
// @typescript-eslint/parser - 将 TypeScript 转换成与 estree 兼容的形式，以便在ESLint中使用。


// 7、Specifying Processor
// 插件可以提供处理器。处理器可以从另一种文件中提取 JavaScript 代码，然后让 ESLint 检测 JavaScript 代码。或者处理器可以在预处理中转换 JavaScript 代码。
// processor就是插件名/处理器
{
    "plugins": ["a-plugin"],
    "processor": "a-plugin/a-processor"
}
// 要为特定类型的文件指定处理器，请使用 overrides 键和 processor 键的组合。例如，下面对 *.md 文件使用处理器 a-plugin/markdown。
{
    "plugins": ["a-plugin"],
    "overrides": [
        {
            "files": ["*.md"],
            "processor": "a-plugin/markdown"
        }
    ]
}

// 8、编辑器中集成eslint
// 例如vscode和eslint之间的关系
// VSCode workspace 的 eslint 配置是配置 VSCode eslint 扩展的，
// 而 .eslintrc 是给 eslint 用的，VSCode 有 eslint 的扩展，很多其它的编辑器或者 IDE 都有 eslint 的扩展。
// eslint 本质就是一个 npm 包，它提供了一些 API。VSCode 的 eslint 扩展调用 eslint 这个包的 API 来实时展示 lint 信息，自动格式化。
// 你完全可以不用 eslint 扩展而用它提供的命令行工具直接 lint。

