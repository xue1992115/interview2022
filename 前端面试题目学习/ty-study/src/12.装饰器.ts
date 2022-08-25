// 1、装饰器
// 在JavaScript 中我们需要 Babel 插件 babel-plugin-transform-decorators-legacy支持装饰器
// 在Typescript 中我们需要在tsconfig.json 里面开启支持选项 experimentalDecorators
// 目前装饰器本质上是一个函数，@expression 的形式其实是一个语法糖, expression 求值后必须也是一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入.
// JavaScript 中的 Class 其实也是一个语法糖,
// 1、类装饰器
function addAge(constructor: Function) {
    constructor.prototype.age = 18;
  }
  
  @addAge
  class Person{
    name: string;
    age!: number;
    constructor() {
      this.name = 'xiaomuzhu';
    }
  }
  
  let person = new Person();
  
  console.log(person.age); // 18

  // 所以上述代码等同于是
  Person = addAge(function Person() { ... });
  // 当装饰器作为修饰类的时候，会把构造器传递进去。 constructor.prototype.age 就是在每一个实例化对象上面添加一个 age 值 这里我们的 addAge 就添加了一个 age 值.

  // 2、方法和属性的装饰器
  // 声明装饰器修饰方法/属性
function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log("prop " + propertyKey);
    console.log("desc " + JSON.stringify(descriptor) + "\n\n");
    descriptor.writable = false;
 };
 
 class Person{
   name: string;
   constructor() {
     this.name = 'xiaomuzhu';
   }
 
   @method
   say(){
     return 'instance method';
   }
 
   @method
   static run(){
     return 'static method';
   }
 }
 
 const xmz = new Person();
 
 // 修改实例方法say
 xmz.say = function() {
   return 'edit'
 }
 
 // 打印结果,检查是否成功修改实例方法
 console.log(xmz.say());

 // 上述的结果如下：
Person { say: [Function] }
prop say
desc {"writable":true,"enumerable":true,"configurable":true}


[Function: Person] { run: [Function] }
prop run
desc {"writable":true,"enumerable":true,"configurable":true}

xmz.say = function() {
       ^
TypeError: Cannot assign to read only property 'say' of object '#<Person>'

// 在属性/方法的装饰器定义过程中,与 class 的装饰器不同,我们的 method 函数中的参数变为了三个 target、propertyKey、descriptor.
// 对,这三个参数正是源于Object.defineProperty,也就是上面提到的 Class 本质是语法糖,实际上属性/方法装饰器是借助Object.defineProperty修改类的方法和属性的.
// 上述代码等同于；如下：
let descriptor = {
    value: function() { return 'instance method'},
    enumerable: false,
    configurable: true,
    writable: true
};

descriptor = readonly(Cat.prototype, "say", descriptor) || descriptor;

Object.defineProperty(Cat.prototype, "say", descriptor);
// 3、高级装饰器
// 参数装饰器，用于修饰参数的装饰器
function logParameter(target: Object, propertyKey: string, index: number) {
    console.log(target, propertyKey, index);
}

class Person {
    greet(@logParameter message: string,@logParameter name: string): string {
        return `${message} ${name}`;
    }
}
const p = new Person();
p.greet('hello', 'xiaomuzhu');

// Person { greet: [Function] } greet 1
// Person { greet: [Function] } greet 

// target —— 当前对象的原型，也就是说，假设 Person 是当前对象，那么当前对象 target 的原型就是 Person.prototype
// propertyKey —— 参数的名称，上例中指的就是 greet
// index —— 参数数组中的位置，比如上例中参数 name 的位置是 1, message 的位置为 0
