// 1、我们在不同的文件重新 定义相同名字的变量、常量会提示已经定义变量了
// 通过export将a变成一个局部的命名空间
// 如果没有import和export则会被看成全局的变量
export const a = 1
const b = 1
type Person = {
    name: String
}
export { b as c, Person }

// 2、命名空间就是为了解决命名重复的问题
// Typescript中的命名空间通过namespace定义
namespace SomeNameSpaceName {
    export interface ISomeInterfaceName {      }  
    export class SomeClassName {      }  
 }
// 以上定义了一个命名空间 SomeNameSpaceName，如果我们需要在外部可以调用 SomeNameSpaceName 中的类类和接口，则需要在类和接口添加 export 关键字.
// 其实一个命名空间本质上一个对象，它的作用是将一系列相关的全局变量组织到一个对象的属性比如：
namespace Letter {
    export let a = 1;
    export let b = 2;
    export let c = 3;
    // ...
    export let z = 26;
  }
// 3、命名空间的用处
// 命名空间的用处
// 命名空间在现代TS开发中的重要性并不高,主要原因是ES6引入了模块系统,文件即模块的方式使得开发者能更好的得组织代码,但是命名空间并非一无是处,通常在一些非 TypeScript 原生代码的 .d.ts 文件中使用,主要是由于 ES Module 过于静态，对 JavaScript 代码结构的表达能力有限。

// 因此在正常的TS项目开发过程中并不建议用命名空间。
// 理解文件，模块与命名空间
