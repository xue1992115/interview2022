const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const types = require("@babel/types");
// 批量创建AST的时候，可以使用到这个
const template = require("@babel/template").default;

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

const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous",
  plugins: ["jsx"],
});

const targetCalleeName = ["log", "info", "error", "debug"].map(
  (item) => `console.${item}`
);
// 变更需求，要在原来的console.log语句之前，在添加一条语句
traverse(ast, {
  CallExpression(path, state) {
    if (path.node.isNew) {
      return;
    }
    const calleeName = path.get("callee").toString();
    if (targetCalleeName.includes(calleeName)) {
      const { line, column } = path.node.loc.start;
      // 创建新的AST,使用template
      const newNode = template.expression(
        `console.log("filename: (${line}, ${column})")`
      )();
      newNode.isNew = true;

      if (path.findParent((path) => path.isJSXElement())) {
        // 替换整个AST
        // replace 后，要调用 path.skip 跳过新节点的遍历。
        path.replaceWith(types.arrayExpression([newNode, path.node]));
        path.skip();
      } else {
        // 插入AST
        path.insertBefore(newNode);
      }
    }
  },
});

const { code, map } = generate(ast);
console.log(code);
