// 在 JavaScript 中，你希望属性为多种类型之一，如字符串或者数组。
// 这就是联合类型所能派上用场的地方（它使用 | 作为标记，如 string | number）。
// 联合类型表示一个值可以是几种类型之一
{
    type Type = string | number | boolean
    // 2、可辨识联合类型
    // 首先要搞清楚两个概念什么是类型字面量和字面量类型
    // 字面量主要有：真值字面量类型，数字字面量类型，枚举字面量类型，大整数字面量类型，字符串字面量类型
    const a: 2333 = 2333 // ok
    const ab : 0b10 = 2 // ok
    const ao : 0o114 = 0b1001100 // ok
    const ax : 0x514 = 0x514 // ok
    const b : 0x1919n = 6425n // ok
    const c : 'xiaomuzhu' = 'xiaomuzhu' // ok
    const d : false = false // ok

    // const g: 'github' = 'pronhub' // 不能将类型“"pronhub"”分配给类型“"github"”
    // 字面量类型要和实际值的字面量一致，否则会报错
    // 3、字面量类型和联合类型
    type Direction = 'North' | 'East' | 'South' | 'West';
    function move(distance: number, direction: Direction) {
        // ...
    }
    // 4、类型字面量
    // 类型字面量(Type Literal)不同于字面量类型（Literal Type),它跟 JavaScript 中的对象字面量的语法很相似:
    type Foo = {
        baz: [
          number,
          'xiaomuzhu'
        ];
        toString(): string;
        readonly [Symbol.iterator]: 'github';
        0x1: 'foo';
        "bar": 12n;
      };

      // 5、可辨识的联合类型
      interface Info {
            username: string
        }
      type UserAction = | {
        id: number
        action: 'delete'
            info: Info
        } |
        {
            action: 'create'
            info: Info
        }
        const UserReducer = (userAction: UserAction) => {
            switch (userAction.action) {
                case 'delete':
                    console.log(userAction.id);
                    break;
                default:
                    break;
            }
        }
        // userAction.action 就是辨识的关键,被称为可辨识的标签
}
