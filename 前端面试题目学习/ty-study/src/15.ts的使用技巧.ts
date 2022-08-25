// 1、注释，提升开发效率
// 2、巧用类型推导
// TypeScript 能根据一些简单的规则推断（检查）变量的类型。
function add(a: number, b: number) {
    return a + b
}
// TypeScript 就可以通过参数与 return 的运算符推导出函数的返回值

// 如果想获取函数整体的类型那么可以借助 typeof
type AddFn = typeof add
// 当然上述情况算是比较简单的情况，有时候我们的返回值类型其实比较复杂，这个时候借助类型推导和 ReturnType 就可以很轻松地获取返回值类型。
type returnType = ReturnType<typeof add> // number
// 3、巧用元组
function query(...args:[string, number, boolean]){
    const d: string = args[0];
    const n: number = args[1];
    const b: boolean = args[2];
  }
// 4、巧用Omit
// 有时候我们需要复用一个类型，但是又不需要此类型内的全部属性，因此需要剔除某些属性，这个时候 Omit 就派上用场了。
interface User {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}
type UserWithoutToken = Omit<User, 'token'>

// 5、运用Record
// Record 允许从 Union 类型中创建新类型，Union 类型中的值用作新类型的属性。

