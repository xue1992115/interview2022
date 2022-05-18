// 1、枚举类型的
// 数字枚举类型的定义，默认是从0开始的，后边的依次累加
enum Direction {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction.Up === 0); // true
console.log(Direction.Down === 1); // true
console.log(Direction.Left === 2); // true
console.log(Direction.Right === 3); // true
enum Direction2 {
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction2.Up, Direction2.Down, Direction2.Left, Direction2.Right); // 10 11 12 13
// 2、字符串枚举类型
enum Direction3 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

console.log(Direction3['Right'], Direction3.Up); // Right Up
// 3、异构枚举
enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = "YES",
}
// 4、反向映射

enum Direction4 {
    Up,
    Down,
    Left,
    Right
}
// 通过value,获取key,如何实现的呢？
console.log(Direction4[0]); // Up
// 原因是枚举的本质如下：
// var Direction5;
// (function (Direction5) {
//     Direction5[Direction5["Up"] = 10] = "Up";
//     Direction5[Direction5["Down"] = 11] = "Down";
//     Direction5[Direction5["Left"] = 12] = "Left";
//     Direction5[Direction5["Right"] = 13] = "Right";
// })(Direction5 || (Direction5 = {}));
// Direction5[Direction5["Up"] = 10] = "Up" 等价于  Direction[10] = "Up"

// 5、常量枚举
const enum Direction6 {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

const d = Direction6.Up;
// 编译之后 const d = "Up"； 没有enum的编译了，原因是后续没有在使用了，因此ts做了一个性能提升
// 如果要保留的话，可以设置添加编译选项 --preserveConstEnums
// 6、联合枚举类型
enum Direction7 {
    Up,
    Down,
    Left,
    Right
}

declare let e: Direction7

enum Animal {
    Dog,
    Cat
}

e = Direction7.Up // ok
// e = Animal.Dog // 不能将类型“Animal.Dog”分配给类型“Direction”
