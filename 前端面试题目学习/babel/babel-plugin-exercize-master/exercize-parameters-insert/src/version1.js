// parse阶段：将代码转成AST的语法
const parser = require("@babel/parser");
// transform阶段：可以遍历 AST，并调用 visitor 函数修改 AST，修改 AST 自然涉及到 AST 的判断、创建、修改等，这时候就需要 @babel/types 了，当需要批量创建 AST 的时候可以使用 @babel/template 来简化 AST 创建逻辑。
// 因为是通过import导出的，有时候需要去default属性
const traverse = require("@babel/traverse").default;
// generate 阶段会把 AST 打印为目标代码字符串，同时生成 sourcemap，需要 @babel/generator 包
const generate = require("@babel/generator").default;

const types = require("@babel/types");
// 要转换的代码
const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;
// 这里sourceType是因为parse需要知道是不是es modules
const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous", // 让babel自动决定是不是
  plugins: ["jsx"], // 使用到了jsx的语法，因此需要开启jsx插件
});
// 要修改 CallExpression 的 AST
traverse(ast, {
  CallExpression(path, state) {
    if (
      types.isMemberExpression(path.node.callee) &&
      path.node.callee.object.name === "console" &&
      ["log", "info", "error", "debug"].includes(path.node.callee.property.name)
    ) {
      const { line, column } = path.node.loc.start;
      path.node.arguments.unshift(
        types.stringLiteral(`filename: (${line}, ${column})`)
      );
    }
  },
});

// 修改完成之后，生成代码和map
const { code, map } = generate(ast);
console.log(code);
