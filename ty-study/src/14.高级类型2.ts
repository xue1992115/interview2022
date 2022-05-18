// 1、高级类型之索引类型
// 索引类型，实际上就是 如果有一个对象，对象中所有key
const user = {
    username: 'Jessica Lee',
    id: 460000201904141743,
    token: '460000201904141743',
    avatar: 'http://dummyimage.com/200x200',
    role: 'vip'
}
interface Obj {
    [key: string]: any
}
function pick(o: Obj, names: string[]) {
return names.map(n => o[n]);
}

const res = pick(user, ['id'])

console.log(res) // [ '460000201904141743' ]
// 但是上述定义的不够严谨
// 参数 names 的成员应该是参数 o 的属性，因此不应该是 string 这种宽泛的定义，应该更加准确
// 我们 pick 函数的返回值类型为 any[]，其实可以更加精准，pick 的返回值类型应该是所取的属性值类型的联合类型
// 要实现上述的严谨性，需要了解下边的两个类型操作符：


//  2、索引类型查询操作符
class Images {
    public src: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    public alt: string = '谷歌'
    public width: number = 500
}

type propsNames = keyof Images
// keyof 正是赋予了开发者查询索引类型的能力
// 3、索引访问操作符
class Images {
    public src: string = 'https://www.google.com.hk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    public alt: string = '谷歌'
    public width: number = 500
}

type propsNames = keyof Images

type propsType = Images[propsNames]
// 有了上述的两个操作符号之后，
function pick<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(n => o[n]);
}

const res = pick(user, ['token', 'id', ])

// 4、映射类型
// 需求场景
// 以下每一个类型都是可选的，除了在每一个类型前面增加？,还有什么方法
interface User {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}
// 这个时候映射类型就派上用场了，映射类型的语法是[K in Keys]:
// K：类型变量，依次绑定到每个属性上，对应每个属性名的类型
// Keys：字符串字面量构成的联合类型，表示一组属性名（的类型）
// 首先获取keys;keyof T,
// 将属性名一一映射出来[K in keyof T]
// 用类型别名表示就是：
type partial<T> = { [K in keyof T]?: T[K] }
type partialUser = partial<User>
// 以上就可以实现，每个属性都是可选的了


// 5、条件类型
// 条件类型够表示非统一的类型,以一个条件表达式进行类型关系检测，从而在两种类型中选择其一:
T extends U ? X : Y
// 上面的代码可以理解为: 若 T 能够赋值给 U，那么类型是 X，否则为 Y,有点类似于JavaScript中的三元条件运算符.
// 比如我们声明一个函数 f,它的参数接收一个布尔类型,当布尔类型为 true 时返回 string 类型,否则返回 number 类型:
declare function f<T extends boolean>(x: T): T extends true ? string : number;

const x = f(Math.random() < 0.5)
const y = f(false)
const z = f(true)

// 6、强大的infer关键字
// infer 是工具类型和底层库中非常常用的关键字,表示在 extends 条件语句中待推断的类型变量,相对而言也比较难理解,我们不妨从一个 typescript 面试题开始:
// 我们之前学过 ReturnType 用于获取函数的返回类型,那么你会如何设计一个 ReturnType?
interface User {
    id: number
    name: string
    form?: string
}

type Foo = () => User

type R1 = ReturnType<Foo> // User

