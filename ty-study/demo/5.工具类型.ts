
{
    // Pick: 表示从一个类型中选中选取指定的几个字段合成一个新的类型
    type Type1 = {
        name: string,
        age: number,
        sex: string,
    }
    type Pick<T, K extends keyof T> = {
        // 进行遍历
        [P in K]: T[P];
    };
    const str: Pick<Type1, 'name' | 'age'> = {name: '小明',age: 22}
    interface Type2 {
        name: string,
        age: number,
        sex: string
    }
    const str2: Pick<Type2, 'name' | 'sex'> = {
        name: 'nihao',
        sex: '男'
    }
    // Extract: 取联合类型T和K的交集
    type Type3 = string | boolean | number;
    type Extract<T, K> = T extends K ? T : never;
    const str3: Extract<Type3, string | number> = 'name'
    // Exclude: 取联合类型T和K的差集
    type Type4 = string | boolean | number;
    type Exclude<T, K> = T extends K ? never : T;
    const str4: Exclude<Type4, string | number | null> = false
    // Partial: 类型属性变成可选的
    type Type5 = {
        name: string,
        age: number
    };
    type Partial<T> = {
        [P in keyof T]?: T[P]
    };
    const str5: Partial<Type5> = {
        name: 'nihao',
        age: 12,
    }
    // Required: 类型属性变成必选的
    type Type6 = {
        name?: string,
        age: number
    };
    type Required<T> = {
        [P in keyof T]-?: T[P]
    };
    const str6: Required<Type6> = {
        age: 12,
        name: '123'
    }
    // Record: Record<K, T>用来将K的每一个键k指定为T类型
    type Record<T extends string, U> = {
        [K in T]: U
    }
    const str7: Record<'name'|'age', string | number> = {
        name: 'nihao',
        age: 'nihao'
    }
    // Omit:和Pick的功能相反，从类型中过滤掉指定的类型
    type Type7 = {
        name: string,
        age: number,
        sex: string,
        weight: number,
    }
    type Omit<T, U> = Pick<T, {
        // 遍历索引，在U中的就移除
        [P in keyof T]: P extends U ? never : P;
    }[keyof T]>
    // 或者以下的写法
    // type Omit<T, U> = Pick<T, Exclude<keyof T, U>>
    

    type BB = {[P in keyof Type7]: P extends 'name' | 'age' ? never : P};
    // 获取值的联合类型，类似于js中获取对象的属性的值
    // a={name: '111'} a[name]
    type CC = BB[keyof Type7]
    const str8: Omit<Type7, 'name' | 'age'> = {
        sex: '女',
        weight: 110
    }
    // Omit写法2
    type Type8 = {
        name: string,
        age: number,
        sex: string,
        weight: number,
    }
    type Omit2<T, U> = {
        // [P in keyof T as (P extends U ? never : P)]: T[P]
        // 将索引设置为never
        [P in keyof T as Exclude<P, U>]: T[P]
    }
    const str9: Omit2<Type8, 'age' | 'name'> = {
        sex: 'lajwe',
        weight: 111
    }
}
