// 1、工具类型类似于js中的工具库函数
// ts中也还有比较多的内置的工具类型

//  (1)泛型
// Partial是将
type Partial<T> = { [P in keyof T]?: T[P] };

// （2）类型递归
// 就是将深层的属性，变成可选的
// 是的,在类型中也有类似于js递归的操作,上面提到的Partial可以把属性变为可选,但是他有个问题,就是无法把深层属性变成可选,只能处理外层属性:
type DeepPartial<T> = {
    [U in keyof T]?: T[U] extends object
    ? DeepPartial<T[U]>
    : T[U]
};

type R2 = DeepPartial<Person>

// (3)关键字
// 像typeof keyof这种关键字，我们已经了解过了，还有其他的关键字
// + -这两个关键字用于映射类型中给属性添加修饰符,比如-?就代表将可选属性变为必选,-readonly代表将只读属性变为非只读.
// 比如TS就内置了一个类型工具Required<T>,它的作用是将传入的属性变为必选项:
type Required<T> = { [P in keyof T]-?: T[P] };

// (4)Omit
// 忽略某些属性

// (5)Merge
// Merge<O1, O2>的作用是将两个对象的属性合并:
type O1 = {
    name: string
    id: number
}

type O2 = {
    id: number
    from: string
}

type R2 = Merge<O1, O2>

// (6)Intersection
// 作用是取T的属性，同时这个属性也在U中
type Props = { name: string; age: number; visible: boolean };
type DefaultProps = { age: number };

// Expect: { age: number; }
type DuplicatedProps = Intersection<Props, DefaultProps>;

// (7)Overwrite
// Overwrite<T, U>顾名思义,是用U的属性覆盖T的相同属性.
type Props = { name: string; age: number; visible: boolean };
type NewProps = { age: string; other: string };

// Expect: { name: string; age: string; visible: boolean; }
type ReplacedProps = Overwrite<Props, NewProps>

// (8)Mutable
// 将 T 的所有属性的 readonly 移除
type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
}


