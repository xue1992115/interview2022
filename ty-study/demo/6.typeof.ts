// typeof可以获取变量的类型，所以typeof后跟的是变量
// typeof在javescript和typescript中的区别就是：
// js中typeof obj返回的是一个'object'
// ts中typeof obj返回的是比较详细的{age: number; name: string;}

// typeof的应用
export const obj = {
    age: 18,
    name: '小明'
}
export type typeObj = typeof obj;
//  {age: number; name: string;}

function getAttribute(obj: object, key: string) {
    return obj[ key as keyof typeof obj]
}
getAttribute(obj, 'name')
