// 1、ownKeys是用来拦截对象获取自身属性的操作
// Object.getOwnPropertyNames()
// Object.getOwnPropertySymbols()
// Object.keys()
// for...in循环: 对对象具备的自身的属性进行遍历

let target = {
  a: 1,
  b: 2,
  c: 3
};

let handler = {
  ownKeys(target) {
    return ['a'];
  }
};

let proxy = new Proxy(target, handler);
console.log(Object.keys(proxy));

// 注意：使用Object.keys方法时，有三类的属性会被ownKeys方法过滤，不会返回
// 1、目标对象上不存在的属性
// 2、属性名为Symbol值
// 3、不可遍历的(enumerable)的属性
let target2 = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.for('secret')]: '4',
};

Object.defineProperty(target2, 'key', {
  enumerable: false,
  configurable: true,
  writable: true,
  value: 'static'
});

let handler2 = {
  ownKeys(target) {
    // 会对key进行过滤
    return ['a', 'd', Symbol.for('secret'), 'key'];
  }
};

let proxy2 = new Proxy(target2, handler2);
console.log(Object.keys(proxy2));
// ['a']

// 3、for...in也会被拦截
const obj = { hello: 'world' };
const proxy3 = new Proxy(obj, {
  ownKeys: function () {
    return ['a', 'c', "null"];
  }
});

for (let key in proxy3) {
  console.log(key); // 没有任何输出
}
