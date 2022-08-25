// 类型断言：本质上是覆盖ts的类型推断，告诉编辑器我知道是什么类型的；类型断言好比其他类型中的类型转换
// 两种形式：一：尖括号
{
    let someValue: any = 'this is a string'
    let strLength: number = (<string>someValue).length
    // as语法进行类型断言
    let someValue2: any = 'this is a string'
    let strLength3: number = (someValue as string).length

    // 通过as过滤索引，从而过滤某些对象中属性
    type Obj = { name: string, age: number, getName(): void}
    // 如果索引为never的时候就会被自动过滤
    // 那么Exclude就是设置索引为never
    type FilterObjProperty<T, U> = {
        [k in keyof T as Exclude<k, U>]: T[k]
    }
    type HD = FilterObjProperty<Obj, 'name' | 'age'>

    // 通过值过滤，对象中的属性
    type User = {
    name: string,
    age: number,
    get(a: string): void,
    }

    type FilterProperty<T, U> = {
        [k in keyof T]: T[k] extends U ? never : k
    }

    type FilterPropertyRes = FilterProperty<User, Function>[keyof User]

    type UU = Pick<User, FilterPropertyRes>;

}
