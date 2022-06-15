// extends继承

{// 1、实现继承，如下
    type Type1 = {
        name: string
    }
    interface Inter2 extends Type1 {
        age: number
    }
    const obj: Inter2 = {
        name: '小明',
        age: 18
    }
    // 2、约束类型
    type Type2 = {
        id: number,
        render(n: number): number,
    }
    function f1<T extends Type2>(arr: T[]){
        arr.map(n => n.render(n.id))
    }
    f1([{ id: 3, render(n){ return n}}])

    // 3、extends在条件类型判断中的使用
    type LongType = {
        name: string,
        age: number
    }
    type ShortType = {
        name: string
    }
    type Type6 = LongType & ShortType
    // 一个长的可以赋值给短的类型，短的类型 不能赋值给长的类型
    // 表示ShortType是否可以赋值给LongType
    type Type4 = ShortType extends LongType ? true :  false




    type UnionType1 = 'string'
    type UnionType2 = 'string' | 'number'
    type Type5 = UnionType1 & UnionType2
    const type3: UnionType1 extends UnionType2 ? string : boolean = 'hanhan';
    const type4: UnionType2 extends UnionType1 ? string : boolean = true;

    // 判断能不能赋值，可以通过两个type做交叉类型，等于的那个就可以赋值给另一个
}
