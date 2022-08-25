// 交叉类型就是将多个类型合并成一个类型，类似于数学中的取并集的概念
// 交叉类型要保证类型结构是一致的
{
    interface A {
        name: string,
        age: string,
    }
    type B  = {
        age: number,
        name: string
    }
    interface C {
        name: string
    }
    // never
    type HD = A & C
    type HD2 = Pick<A, 'name'> & B
    let c: HD= { name: '小明', age: '12' }
    let d: HD2= { name: '小明', age: 12 }

    function merge <T, U>(a: T & U, b: U): T & U {
        for(const key in b) {
            a[key] = b[key] as any 
        }
        return a;
    }
    // 定义一个联合类型
    type E = 'a' | 'b'
    type F = 'a'
    // 'a' | never => 'a'
    type G = F & E
}
