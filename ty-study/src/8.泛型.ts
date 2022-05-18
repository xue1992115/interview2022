// 泛型是 TypeScript 中非常重要的一个概念，因为在之后实际开发中任何时候都离不开泛型的帮助，原因就在于泛型给予开发者创造灵活、可重用代码的能力。
// 1、初始泛型
// 假设我们用一个函数，它可接受一个 number 参数并返回一个 number 参数。
function returnItem (para: number): number {
    return para
}
// 我们按以上的写法貌似是没问题的，那么如果我们要接受一个 string 并返回同样一个 string 呢？逻辑是一样的，但是仅仅是类型发生了变化，难道需要再写一遍？
// function returnItem (para: string): string {
//     return para
// }
// 难道我们只能用 any 表示了？
// 我们现在的情况是，我们在静态编写的时候并不确定传入的参数到底是什么类型，只有当在运行时传入参数后我们才能确定。
// 那么我们需要变量，这个变量代表了传入的类型，然后再返回这个变量，它是一种特殊的变量，只用于表示类型而不是值。
// 这个类型变量在 TypeScript 中就叫做「泛型」。
// 我们在函数名称后面声明泛型变量 <T>，它用于捕获开发者传入的参数类型（比如说string），然后我们就可以使用T(也就是string)做参数类型和返回值类型了。
// function returnItem<T> (para: T): T {
//     return para
// }
// 2、多个类型参数
// 定义泛型的时候，可以一次定义多个类型参数，比如我们可以同时定义泛型 T 和 泛型 U：
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

swap([7, 'seven']); // ['seven', 7]
// 3、泛型变量
// 我们现在假设有这样的需求，我们的函数接受一个数组，如何把数组的长度打印出来，最后返回这个数组，我们应该如何定义？

// 我们当然得运用上刚才学的泛型：
// function getArrayLength<T>(arg: T): T {
//     console.log(arg.length) // 类型“T”上不存在属性“length”
//     return arg
//   }
function getArrayLength<T>(arg: Array<T>) {

console.log((arg as Array<any>).length) // ok
return arg
}
// 4、泛型接口
// 泛型也可用于接口声明，以上面的函数为例，如果我们将其转化为接口的形式。
interface ReturnItemFn<T> {
    (para: T): T
}
// 那么当我们想传入一个number作为参数的时候，就可以这样声明函数:
const returnItem6: ReturnItemFn<number> = para => para
// 5、泛型类
// 泛型除了可以在函数中使用，还可以在类中使用，它既可以作用于类本身，也可以作用与类的成员函数。
class Stack<T> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}
// 6、泛型约束 extends约束泛型
type Params = number | string
class Stack2<T extends Params> {
    private arr: T[] = []

    public push(item: T) {
        this.arr.push(item)
    }

    public pop() {
        this.arr.pop()
    }
}
