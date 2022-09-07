// 1、构造函数继承
// 构造函数继承本质上拷贝一份数据
// 缺点：无法继承原型上的属性和方法
function Parent() {
  this.name = "Parent";
  this.arr = [1, 2, 3, 4]; // 也是拷贝一份，修改其中一个都不影响
}
Parent.prototype.getName = function () {
  return this.name;
};
function Child() {
  Parent.call(this);
  this.age = 20;
}
const child = new Child();
child.arr.push(10);
const childNew = new Child();
console.log(child, childNew);

// 2、原型链继承
// 缺点就是引用类型的数据共享
function Parent2() {
  this.name = "Parent";
  this.arr = [1, 2, 3, 4];
}
Parent2.prototype.getName = function () {
  return this.name;
};
Child2.prototype = new Parent2();
function Child2() {
  this.age = 20;
}
const child2 = new Child2();
child2.arr.push(10); // 修改其中一个，其他的也会被修改
const child2New = new Child2();
console.log(child2.arr, child2New.arr);

// 3、组合继承（构造函数+原型）
// 缺点就是会多new一次Parent3
function Parent3() {
  this.name = "Parent";
  this.arr = [1, 2, 3, 4];
}
Parent3.prototype.getName = function () {
  return this.name;
};
function Child3() {
  Parent3.call(this);
  this.age = 20;
}
Child3.prototype = new Parent3();
var child3 = new Child3();
var child3New = new Child3();
child3.arr.push(4);
console.log(child3.arr, child3New.arr);

// 4、组合继承的优化（寄生组合继承）
function Parent4() {
  this.name = "Parent";
  this.arr = [1, 2, 3, 4];
}
Parent4.prototype.getName = function () {
  return this.name;
};
function Child4() {
  Parent4.call(this);
  this.age = 20;
}
Child4.prototype = Object.create(Parent4.prototype);
Child4.prototype.constructor = Child4;

var child4 = new Child4();
var child4New = new Child4();
child4.arr.push(4);
console.log(child4.constructor, child4New.constructor);

// 5、原型式继承
const obj = {
  name: "123",
  getName: function () {
    return this.name;
  },
};

const obj1 = Object.create(obj);

console.log(obj.getName());
// 6、寄生继承
const obj2 = {
  name: "123",
  getName: function () {
    return this.name;
  },
};

function ObjectCreator(obj) {
  const obj3 = Object.create(obj);
  obj3.getName = function () {
    return this.name;
  };
  return obj3;
}

console.log(ObjectCreator(obj2).getName());

// 7、es6中的class实现继承
