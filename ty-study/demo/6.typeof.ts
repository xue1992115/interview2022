// typeof可以获取变量的类型，所以typeof后跟的是变量
// typeof在javescript和typescript中的区别就是：
// js中typeof obj返回的是一个'object'
// ts中typeof obj返回的是比较详细的{age: number; name: string;}

{ 
    // typeof举例使用
    const obj = {
        age: 18,
        name: '小明'
    }
    type typeObj = typeof obj;
    //  {age: number; name: string;}

    function getAttribute(obj: object, key: string) {
        return obj[ key as keyof typeof obj]
    }
    getAttribute(obj, 'name')
    // typeof其他比较好的用途
    // 1、typeof还有比较好用的就是在项目中，如果有嵌套层级较深的大的对象，可以通过typeof去获取对象的类型
    // 2、获取函数的类型
    function add(a: number, b: number) {
        return a + b
    }
    type AddType = typeof add
    type AddReturnType = ReturnType<AddType>
    type AddParamsType = Parameters<AddType>
}

