//  ts工作的大致流程
// 本章节主要大致了解ts的编译原理，然后我们编写一个插件TypeScript Transformer Plugin
// 1、编译器的主要组成部分
// (1)Scanner 扫描器
// (2)Parser 解析器
// (3)Binder 绑定器
// (4)Checker 检查器
// (5)Emiter 发射器


// 2、编译器的处理流程
// (1)扫描器通过扫描源代码生成token流:
SourceCode（源码）+ 扫描器 --> Token 流
// (2)解析器将token流解析为抽象语法树(AST):
Token 流 + 解析器 --> AST（抽象语法树）
// (3)绑定器将AST中的声明节点与相同实体的其他声明相连形成符号(Symbols),符号是语义系统的主要构造块:
AST + 绑定器 --> Symbols（符号）
// (4)检查器通过符号和AST来验证源代码语义:
AST + 符号 + 检查器 --> 类型验证
// (5)最后我们通过发射器生成JavaScript代码:
AST + 检查器 + 发射器 --> JavaScript 代码
// (6)具体的流程就是
解析-->转换-->生成
// 我们主要控制的要编写的 transformer Plugin 作用于 Emitter 阶段.

// 3、抽象语法树的生成
// 比如一段代码，如何取转换
// (1)字符流转换为被定义过的token流
// (2)线性token流被转化为抽象语法树
// AST是一棵树,这棵树的节点代表了语法信息,这棵树的边代表了节点之间的组成关系。
// AST以ES Tree规范来以JSON形式输出:
const a = 3 + 4;
console.log(a);
// 生成的语法树如下：
{
    "type": "Program",
    "body": [
      {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "name": "a"
            },
            "init": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": {
                "type": "Literal",
                "value": 3,
              },
              "right": {
                "type": "Literal",
                "value": 4,
              }
            }
          }
        ]
      },
      {
        "type": "ExpressionStatement",
        "expression": {
          "type": "CallExpression",
          "callee": {
            "type": "MemberExpression",
            "computed": false,
            "object": {
              "type": "Identifier",
              "name": "console"
            },
            "property": {
              "type": "Identifier",
              "name": "log"
            }
          },
          "arguments": [
            {
              "type": "Identifier",
              "name": "a"
            }
          ]
        }
      }
    ]
  }
// (3)修改节点
// 接着上面的例子,我们想要修改节点就必须对节点进行访问,这就涉及到了访问者模式,这种模式使我们可以遍历一棵树，而不必实现or知道树中的所有信息。
// 例如,下面的代码将所有需要改变相关的每个标识符a为b
tree.visit({
    Identifier(node) {
        if (node.name === 'a') {
        node.name = 'b';
        }
    },
})
// 

