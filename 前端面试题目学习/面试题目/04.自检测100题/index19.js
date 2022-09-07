const person = { name: "Lydia" };
//Object.defineProperty添加的属性是不可枚举的
// Object.keys方法仅返回对象中 可枚举(enumerable) 的属性
Object.defineProperty(person, "age", { value: 21 });

console.log(person); // { name: 'Lydia' }
console.log(Object.keys(person)); // [ 'name' ]
