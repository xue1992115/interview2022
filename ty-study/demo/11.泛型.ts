// 1、泛型，就是类型函数
// 通过定义一个变量表示传入参数的类型，然后链式传递给参数类型和返回值类型
{
    function returnItem1 (para: string): string {
        return para
    }
    function returnItem2 (para: number): number {
        return para
    }

    // T用于捕获开发者传入参入的类型变量
    // 然后链式传递给参数类型和返回值类型
    function returnItem<T>(para: T): T {
        return para
    }
    // 2、多参数类型
    // 除了T之外，泛型还有V, K, E
    // T： type
    // V： Value
    // K： Key
    // E： Element
    // U: 自定义的
    function getArrayLength<T>(arg: Array<T>): Array<T> {
        console.log((arg as Array<T>).length);
        return arg
    }
    // 3、泛型在其他类型上的使用
    // 3.1、泛型接口
    interface Type<T> {
        (name: T): T
    }
    const str: Type<string> = param => param
    // 3.2、泛型类
    class Stack<T> {
        private arr: T[] = [];
        public push(item: T) {
            this.arr.push(item)
        }
    }
    // 3.3泛型约束extends
    type paramsType = string | number
    class Stack2<T extends paramsType> {
        private arr: T[] = [];
        public push(item: T) {
            this.arr.push(item)
        }
    }
    // const stack1 = new Stack2<boolean>() // error
    const stack1 = new Stack2<string>()
    // 3.4泛型和索引类型
    // 现在有一个需求定义一个函数，接受两个参数，一个是object,一个是对象中的属性key, 返回属性的value
    function getObjectValue<T extends object, K extends keyof T>(obj: T, k: K) {
        return obj[k]
    }
    // 3.5多重类型进行约束
    interface Type2 {
        doSomething(): number
    }
    interface Type3 {
        doSomethingElse(): string
    }
    // 直接采用泛型取extends两个类型，后边的不起作用
    // class Stack3<T extends Type2, Type3> {
    //     private genericProperty: T
    //     useT() {
    //         this.genericProperty.doSomething() // ok
    //         this.genericProperty.doSomethingElse() // ok
    //     }
    // }
    // 解决一：在定义一个interface
    interface Type4 extends Type2, Type3 {

    }
    class Stack3<T extends Type4> {
    }
    // 解决二：交叉类型处理
}
