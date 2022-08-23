// plugin基本上都是构造函数
/* 
1、webpack加载webpack.config.js中所有的配置，此时就会new Demo01()，执行插件中的构造函数
2、webpack创建compiler对象
3、遍历所有plugin中的插件，调用插件中的apply方法
4、执行剩下的流程，触发各个hooks事件
*/
/* 
如何注册hooks
*/

class Demo01 {
  // 主要就是这两个方法constructor  apply
  constructor() {
    console.log("constructor");
  }
  apply(compiler) {
    // 注册钩子
    // environment是同步的钩子，需要使用tap注册
    compiler.hooks.environment.tap("Demo01", (params) => {
      console.log("注册钩子");
    });
  }
}
module.exports = Demo01;
