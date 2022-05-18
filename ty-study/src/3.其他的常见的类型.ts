// 1、除了原始类型之外，还有其他的类型
// 2、计算机系统理论中的顶级类型
// (1)any
// any标记一些动态内容的类型，尽量减少使用
let notSure: any = 4;
notSure = "maybe a string instead";
// (2)unknown
// unknown是any对应的安全类型，举例子如下：
let value: any;

value = true;             // OK
value = 1;                // OK
value = "Hello World";    // OK
value = Symbol("type");   // OK
value = {}                // OK
value = []                // OK

let value1: unknown;

value1 = true;             // OK
value1 = 1;                // OK
value1 = "Hello World";    // OK
value1 = Symbol("type");   // OK
value1 = {}                // OK
value1 = []                // OK
// 以上都可以，但是unknown在确定类型之前是不允许进行任何操作；如下
let value3: any;

value3.foo.bar;  // OK
value3();        // OK
new value3();    // OK
value3[0][1];    // OK


let value4: unknown;
// 以下代码会报错
// value4.foo.bar;  // ERROR
// value4();        // ERROR
// new value4();    // ERROR
// value4[0][1];    // ERROR


// 3、类型系统中的底部类型
// (1)never
// never是任何类型的字类型，可以赋值给任何类型，但任何类型却不能赋值给never，除了never
// 比较常见的场景
// 抛出异常的函数永远不会有返回值
function error(message: string): never {
    throw new Error(message);
}

// 空数组，而且永远是空的
const empty: never[] = []
// 4、非原始类型
//（1）object
// object 表示非原始类型，也就是除 number，string，boolean，symbol，null 或 undefined 之外的类型。
// 这是下一节会提到的枚举类型
enum Direction {
    Center = 1
}

let value5: object

value5 = Direction
value5 = [1]
value5 = [1, 'hello']
value5 = {}
// 可以看到普通对象、枚举、数组、元组通通都是 object 类型
// (2)array
// 范型的定义方法
const list: Array<number> = [1, 2, 3]
// 另一种定义方法
const list2: number[] = [1, 2, 3]
// (3)tuple
// 元组和数组比较相似，但是个元素类型可以不同
// 这就是元组与数组的不同之处，元组的类型如果多出或者少于规定的类型是会报错的，必须严格跟事先声明的类型一致才不会报错
let x: [string, number];
// x = ['hello', 10, false] // Error
// x = ['hello'] // Error
// 元组还有一个元组越界问题，比如Typescript允许元组push一个元素
const tuple: [string, number] = ['a', 1];
tuple.push(2); // ok
console.log(tuple); // ["a", 1, 2] -> 正常打印出来
// 当时我们访问新元素的时候就会报错；
// console.log(tuple[2]); // Tuple type '[string, number]' of length '2' has no element at index '2'
