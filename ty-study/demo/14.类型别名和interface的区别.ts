// 1、type可以给基本类型、联合类型、任何手写的类型
// interface只能定义对象类型

// 相同点：
// 都可以描述函数和对象
// 类型别名和接口都支持扩展 type通过交叉类型扩展 interface通过extends扩展
// interface可以通过extends来扩展类型别名定义的类型
// type可以通过&来扩展已定义的接口类型


// 不同点：interface只能定义对象
// 不同接口回自动合并，type不会自动合并
{
    type Type1 = string
    type Type3 = number
    interface User {
        name: string
    }
    interface User {
        age: number
    }
}

