// 1、类型兼容是确定一个类型是否能赋给其他类型
// （1）结构类型兼容
// 就是结构类型是一种只使用其成员来描述类型的方式，其基本规则是，如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性。
class Person10 {
    constructor(public weight: number, public name: string, public born: string) {

    }
}

interface Dog {
    name: string
    weight: number
}

let x10: Dog

x10 = new Person10(120, 'cxk', '1996-12-12') // OK

// (2)函数的类型兼容
// 函数类型的兼容性判断，要查看 x 是否能赋值给 y，首先看它们的参数列表
// x 的每个参数必须能在 y 里找到对应类型的参数,注意的是参数的名字相同与否无所谓，只看它们的类型。
// 这里，x 的每个参数在 y 中都能找到对应的参数，所以允许赋值:
let x11 = (a: number) => 0;
let y = (b: number, s: string) => 0;

y = x11; // OK
x11 = y; // Error 不能将类型“(b: number, s: string) => number”分配给类型“(a: number) => number”。

// （3）枚举类型兼容
// 枚举类型和数字类型的互相兼容
enum Status {
Ready,
Waiting
}
  
let status2 = Status.Ready;
let num = 0;

status2 = num;
num = status2;

// （4）类的类型兼容性
// 
class Animal10 {
    feet: number;
    constructor(name: string, numFeet: number) {}
  }
  
  class Size {
    feet: number;
    constructor(meters: number) {}
  }
  
  let a12: Animal10;
  let s15: Size;
  
  a12 = s15; // OK
  s15 = a; // OK
  
// （5）泛型类型兼容
// 泛型本身就是不确定的类型,它的表现根据是否被成员使用而不同.
interface Person<T> {

}

let x : Person<string>
let y : Person<number>

x = y // ok
y = x // ok
// 由于没有被成员使用，所以这里是可以的
interface Person<T> {
    name: T
}

let x : Person<string>
let y : Person<number>

x = y // 不能将类型“Person<number>”分配给类型“Person<string>”。
y = x // 不能将类型“Person<string>”分配给类型“Person<number>”。
// 上述是不可以的，由于泛型T别成员使用，所以是不可以的

