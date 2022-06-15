// infer表示在extends条件语句中待推断的类型变量
{
    interface User {
        id: number,
        name: string,
        from: string,
        get(a: string): void
    }
    // 返回一个联合类型的
    type ParamsType<T> = T extends {name: infer M, id: infer N, from: infer M} ? M | N : T;
    type ValueType = ParamsType<User>
    const str: ValueType = 'ww'

    // 也可以通过遍历的方式获取变量的类型，返回一个联合类型的
    type ParamsType2<T> = {
        [K in keyof T]: T[K] extends (infer U) ? U : K;
    }[keyof T]
    type BB = {
        [K in keyof User]: User[K] extends (infer U) ? U : K;
    }[keyof User]
    const str2: ParamsType2<User> = (a: string) => {}
}
//待推断的类型只能到在extends后，且只能放在真的位置

