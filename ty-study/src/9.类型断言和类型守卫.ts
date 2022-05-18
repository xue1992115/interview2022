// 1、有些情况下 TS 并不能正确或者准确得推断类型,这个时候可能产生不必要的警告或者报错。
const person = {};

person.name = 'xiaomuzhu'; // Error: 'name' 属性不存在于 ‘{}’
person.age = 20; // Error: 'age' 属性不存在于 ‘{}’

// 这个时候该怎么办？由于类型推断，这个时候 person 的类型就是 {}，根本不存在后添加的那些属性，虽然这个写法在js中完全没问题，但是开发者知道这个 person 实际是有属性的，只是一开始没有声明而已，但是 typescript 不知道啊，所以就需要类型断言了
interface Person {
    name: string;
    age: number;
  }
// 类型断言
const person2 = {} as Person;

person2.name = 'xiaomuzhu';
person2.age = 20;
//但是类型断言不要滥用,在万不得已的情况下使用要谨慎,因为你强制把某类型断言会造成 TypeScript 丧失代码提示的能力。
// 2、双重断言
interface Person {
	name: string;
	age: number;
}

const person3 = 'xiaomuzhu' as Person; // Error
// 可以使用双重断言
interface Person {
	name: string;
	age: number;
}
// 先把类型断言为 any 再接着断言为你想断言的类型就能实现双重断言，当然上面的例子肯定说不通的，双重断言我们也更不建议滥用，但是在一些少见的场景下也有用武之地，当你遇到事记得有双重断言这个操作即可。
const person4 = 'xiaomuzhu' as any as Person; // ok
// 3、类型守卫
// 顾名思义就是缩小类型的范围
// （1）instanceof
//instanceof 类型保护是通过构造函数来细化类型的一种方式.
class Person {
    name = 'xiaomuzhu';
    age = 20;
}

class Animal7 {
    name = 'petty';
    color = 'pink';
}

function getSometing(arg: Person | Animal) {
    // 类型细化为 Person
    if (arg instanceof Person) {
        console.log(arg.color); // Error，因为arg被细化为Person，而Person上不存在 color属性
        console.log(arg.age); // ok
    }
    // 类型细化为 Person
    if (arg instanceof Animal7) {
        console.log(arg.age); // Error，因为arg被细化为Animal，而Animal上不存在 age 属性
        console.log(arg.color); // ok
    }
}

// (2)in 跟上面的例子类似，x in y 表示 x 属性在 y 中存在。
class Person2 {
	name = 'xiaomuzhu';
	age = 20;
}

class Animal8 {
	name = 'petty';
	color = 'pink';
}

function getSometing2(arg: Person2 | Animal8) {
	if ('age' in arg) {
		console.log(arg.color); // Error
		console.log(arg.age); // ok
	}
	if ('color' in arg) {
		console.log(arg.age); // Error
		console.log(arg.color); // ok
	}
}

