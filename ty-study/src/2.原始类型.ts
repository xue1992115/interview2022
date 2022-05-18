// 1、ts原始类型：boolean,string,number,void,undefined,null,symbol,bigint八种
// 注意上述的都是小写开头，大写开头的都是基础类型对象的对象；两者完全不同
// 2、number支持二进制、十进制、十六进制
const decLiteral: number = 6
const hexLiteral: number = 0xf00d
const binaryLiteral: number = 0b1010
const octalLiteral: number = 0o744
// 3、string
const str: string = '学习ts'
// 4、void
// 常见的就是函数的返回类型是空值
function warnUser(): void {
    alert("This is my warning message");
}
// 实际上只有undefined和null可以赋值给void
const a: void = undefined
// null和undefined
let b: undefined = undefined;
let c: null = null;
// 5、symbol
// 注意：我们在使用 Symbol 的时候，必须添加 es6 的编译辅助库,如下：
const sym1 = Symbol('key1');
const sym2 = Symbol('key2');
// 6、bigint
// 使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了JavaScript构造函数 Number 能够表示的安全整数范围。
// 注意：我们在使用 BigInt 的时候，必须添加 ESNext 的编译辅助库,如下
const max = Number.MAX_SAFE_INTEGER;

const max1 = max + 1
const max2 = max + 2

max1 === max2 //true
// 注意，这里是 JavaScript 代码，并不是 typescript
const max3 = BigInt(Number.MAX_SAFE_INTEGER);

const max4 = max3 + 1n
const max5 = max3 + 2n

max4 === max5 // false
