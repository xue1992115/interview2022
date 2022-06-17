// 枚举用于声明一组命名的常量，当一个变量有几种可能的取值的时，可以定义为枚举类型
{
    // 1、数字枚举类型的
    // 不赋值的时候，默认的是0，并且一次递增
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
    // 2、字符串枚举类型
    enum Direction2 {
        Up = 'Up',
        Down = 'Down',
        Left = 'Left',
        Right = 'Right'
    }
    
    console.log(Direction['Right'], Direction.Up); // Right Up

    // 3、异构枚举类型
    enum Direction3 {
        Up = 0,
        Down = 'Down'
    }
    // 4、反向映射
    enum Direction4 {
        Up,
        Down,
        Left,
        Right
    }
    
    console.log(Direction4[0]); // Up
    // 枚举的本质
    // var Direction;
    // (function (Direction) {
    //     Direction[Direction["Up"] = 10] = "Up";
    //     Direction[Direction["Down"] = 11] = "Down";
    //     Direction[Direction["Left"] = 12] = "Left";
    //     Direction[Direction["Right"] = 13] = "Right";
    // })(Direction || (Direction = {}));

    // 5、常量枚举
    // 好处
    const enum Direction5 {
        Up = 'shhs'
    }
    const a = Direction5.Up
    // 这就是常量枚举的作用,因为下面的变量 a 已经使用过了枚举类型,之后就没有用了,也没有必要存在与 JavaScript 中了, TypeScript 在这一步就把 Direction 去掉了,我们直接使用 Direction 的值即可,这是性能提升的一个方案。
   // 6、枚举合并
   enum Direction6 {
        Up = 'Up',
        Down = 'Down',
        Left = 'Left',
        Right = 'Right'
    }

    enum Direction6 {
        Center = 1
    }
}
