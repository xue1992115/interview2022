// TypeScript 的核心原则之一是对值所具有的结构进行类型检查,它有时被称做“鸭式辨型法”或“结构性子类型化”。
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
// 1、接口使用
// 以下定义了一个函数
interface User {
    name: string
    age: number
    isMale: boolean
}

const getUserName = (user: User) => user.name
// 2、可选属性
// 当我们看到代码提示的时候，这个 age 属性既可能是number类型也可能是 undefined 。
interface User2 {
    name: string
    age?: number
    isMale: boolean
}
// 3、只读属性
// 一旦修改属性，就会报错警告
interface User3 {
    readonly name: string
    age?: number
    isMale: boolean
}
// 4、函数类型的
interface User4 {
    name: string
    age?: number
    readonly isMale: boolean
    say: (words: string) => string
}
const getUserName4 = (user: User4) => user.say('han')
// 5、属性检查
interface Config {
    width?: number;
  }
  
  function  CalculateAreas(config: Config): { area: number} {
    let square = 100;
    if (config.width) {
        square = config.width * config.width;
    }
    return {area: square};
  }
  
//   let mySquare = CalculateAreas({ widdth: 5 });
// 以上代码传入的是widdth，而不是width
// 此时TypeScript会认为这段代码可能存在问题。对象字面量当被赋值给变量或作为参数传递的时候，会被特殊对待而且经过“额外属性检查”。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。
// 解决方法：
// (1)类型断言
let mySquare = CalculateAreas({ widdth: 5 } as Config);
// (2)第二种添加字符串索引签名：
interface Config {
    width?: number;
    [propName: string]: any;
 }
// 这样Config可以有任意数量的属性，并且只要不是width，那么就无所谓他们的类型是什么了。
// 6、可索引类型
// 小张的信息
// {
//     name: 'xiaozhang',
//     age: 18,
//     isMale: false,
//     say: Function,
//     phone: {
//         NetEase: 'xiaozhang@163.com',
//         qq: '1845751425@qq.com',
//     }
// }

// 小明的信息
// {
//     name: 'xiaoming',
//     age: 16,
//     isMale: true,
//     say: Function,
//     phone: {
//         NetEase: 'xiaoming@163.com',
//         qq: '784536325@qq.com',
//         sina: 'abc784536325@sina.com',
//     }
// }

interface Phone {
    [name: string]: string
}

interface User5 {
    name: string
    age?: number
    readonly isMale: boolean
    say: () => string
    phone: Phone
}

// 7、继承接口
// 我们有一天又有一个新需求，就是需要重新创建一个新的VIP User ，这个 VIPUser 的属性与普通 User 一致，只是多了一些额外的属性，这个时候需要重新写一个接口吗？
interface VIPUser extends User {
    broadcast: () => void
}
// 设置可以继承多个接口
interface VIPUser extends User, SupperUser {
    broadcast: () => void
}
