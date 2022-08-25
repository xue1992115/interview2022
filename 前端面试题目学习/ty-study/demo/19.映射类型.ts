// 映射类型类似于 js中 for...in语句
// { [P in K]: T}
// 常见的映射类型语法
// { [P in K]: T}
// { [P in K]?: T}
// { [P in K]-?: T}
// { readonly[P in K]: T}
// { readonly[P in K]?: T}
// { -readonly[P in K]: T}
// 以上的减号表示移除

// 具体的应用场景：
{
    type Item = {
        name: string,
        age?: number,
        sex: string
    }
    type Partial<T> = {
        [K in keyof T]?: T[K]
    }
    const str: Partial<Item> = {
        name: '33'
    }
    type Require<T> = {
        [K in keyof T]-?: T[K]
    }
    const str2: Require<Item> = {
        name: '33',
        age: 11,
        sex: 'dd'
    }
}
