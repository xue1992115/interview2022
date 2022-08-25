// 1、交叉类型
// 交叉类型是将多个类型合并成一个类型，把多个类型合并成一个类型，
// 它包含了所有类型所需的特性
interface IAnyObject {
    [prop: string]: any
}

function mixin<T extends IAnyObject, U extends IAnyObject>(first: T, second: U): T & U {
    const result = <T & U>{};
    for (let id in first) {
      (<T>result)[id] = first[id];
    }
    for (let id in second) {
      if (!result.hasOwnProperty(id)) {
        (<U>result)[id] = second[id];
      }
    }
  
    return result;
  }
  
  const k = mixin({ a: 'hello' }, { b: 42 });
  
  // 现在 x 拥有了 a 属性与 b 属性
  const q = k.a;
  const p = k.b;
// 2、联合类型
// 你希望属性为多种类型之一，如字符串或者数组。
// 这就是联合类型所能派上用场的地方（它使用 | 作为标记，如 string | number）。
function formatCommandline(command: string[] | string) {
    let line = '';
    if (typeof command === 'string') {
      line = command.trim();
    } else {
      line = command.join(' ').trim();
    }
  }
// 3、类型别名
// 类型别名会给一个类型起个新名字,类型别名有时和接口很像,但是可以作用于原始值、联合类型、元组以及其它任何你需要手写的类型.
// 你可以使用 type SomeName = someValidTypeAnnotation的语法来创建类型别名:
type some = boolean | string

const b: some = true // ok
const c: some = 'hello' // ok
const d: some = 123 // 不能将类型“123”分配给类型“some”


