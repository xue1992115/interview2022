// 1、interface: 对值所有的结构进行描述
{
    interface User {
        name: string,
        age: number,
    }
    // 例如：
    const getUserName = (user: User): string=> user.name;
    // 2、可选属性 ?
    interface User2 {
        name: string
        age?: number
        isMale: boolean
    }
    // 3、只读属性
    interface User3 {
        name: string
        age?: number
        readonly isMale: boolean
    }
    // 4、函数类型
    interface User4 {
        name: string
        age?: number
        readonly isMale: boolean,
        say(str: string): string
    }
    // 或者先定义个函数
    interface Say {
        (str: string): string
    }
    interface User5 {
        name: string
        age?: number
        readonly isMale: boolean,
        say: Say
    }
    // 5、interface中的属性检查
    // 当对象字面量当被赋值给变量作为参数传递的时候，会被特殊对待而且经过“额外属性检查”
    // 解决办法：
    // (1）类型断言，就是覆盖编辑器的类型推断，跳过类型检查
    // (2) 添加字符串索引签名
    // (3) 先将字面量赋值给any

    // 6、可索引类型
    interface Phone {
        [name: string]: string
    }
    
    interface User6 {
        name: string
        age?: number
        readonly isMale: boolean
        say: () => string
        phone: Phone
    }
    // 7、继承接口 extends
    interface VIPUser extends User6 {
        broadcast: () => void
    }
}

