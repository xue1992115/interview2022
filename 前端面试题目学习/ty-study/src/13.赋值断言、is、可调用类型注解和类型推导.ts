// 1、明确赋值断言
// TypeScript 2.7 引入了一个新的控制严格性的标记: --strictPropertyInitialization
class StrictClass {
    foo: number;
    bar = 'hello';
    baz: boolean; // 属性“baz”没有初始化表达式，且未在构造函数中明确赋值
    constructor() {
        this.foo = 42;
    }
}
// 上述的例子中baz没有初始化，因此会报错，解决办法就是使用赋值断言
// 告诉这里并不需要初始化，这就需要「明确赋值断言」。
class StrictClass2 {
    foo: number;
    bar = 'hello';
    baz!: boolean; // 属性“baz”没有初始化表达式，且未在构造函数中明确赋值
    constructor() {
        this.foo = 42;
    }
}

// is关键字
export function foo(arg: string): arg is MyType {
    return ...
}

function isString(test: any): test is string{
    return typeof test === 'string';
}

function example(foo: number | string){
    if(isString(foo)){
        console.log('it is a string' + foo);
        console.log(foo.length); // string function
    }
}
example('hello world');
// is的作用就是判断test是不是string类型的，并根据结果返回boolean相关类型


// 3、可调用类型注解
// 我们已经可以用静态类型注解我们的函数、参数等等，但是假设我们有一个接口，我们如何操作才能让它被注解为可执行的:
interface ToString {
  
}

declare const sometingToString: ToString;

sometingToString() // This expression is not callable. Type 'ToString' has no call signatures.ts(2349)
// 上述代码会报错，因为表达式是不可调用的。
// 我们必须用一种方法让编译器知道这个是可调用的，我们可以这样：
interface ToString {
    (): string
  }
  
  declare const sometingToString: ToString;
  
  new sometingToString() // 其目标缺少构造签名的 "new" 表达式隐式具有 "any" 类型
// 上述方法就失灵了，我们可以加上 new 来表示此接口可以实例化。
interface ToString {
    new (): string
  }
  
  declare const sometingToString: ToString;
  
  new sometingToString() // ok

  // 4、类型推导
  // 函数返回类型推导
  function greeter(person: string) {
    return "Hello, " + person
}
// 上述函数ts自带返回值的类型推导
let arr1 = [1, 'one', 1n]
// arr1也带有类型推导 编译器把它推导成了一个联合类型：string | number | bigint
// 解构推导
const bar = [1, 2];
let [a, b] = bar;
a = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
// 类型推导的不足
const action = {
    type: 'update',
    payload: {
      id: 10
    }
  }
// 这似乎没什么不对，但是我们需要的 type 属性的类型是「字符串字面量」类型，而不是 string，这就是类型推导的无法做到的了。
// 这个时候或者我们用类型断言帮助编译器，或者声明一个接口，类型推导就难有用武之地了。
interface Action {
    type: 'update',
    payload: {
      id: number
    }
  }
  
  const action1: Action = {
    type: 'update',
    payload: {
      id: 10
    }
  }
  



