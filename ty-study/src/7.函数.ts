// 1、函数是 JavaScript 应用程序的基础,它帮助你实现抽象层、模拟类、信息隐藏和模块。
// 2、定义函数的类型
// 虽然我们只显示的定义了参数的类型。但是实际上 TypeScript 编译器是能『感知』到这个函数的类型的:
// 这就是所谓的类型推断：括号里的 (a: number, b: number) 为参数类型,而通过 => 来连接参数与返回值, 最后则是返回值的类型。
const add = (a: number, b: number) => a + b
// 3、可选参数 ?
const add2 = (a: number, b?: number) => a + (b ? b : 0)
// 4、默认参数
const add3 = (a: number, b = 10) => a + b
// 5、剩余参数，剩余参数使用一个数组表示
const add4 = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)
