// 1、类型别名
// 类型别名就是给类型重新命名；可作用于原始类型，联合类型，元组以及其他的类型
type Type1 = string;
type Type2 = number;
type Type3 = null;
type Type4 = undefined;
type Type5 = void;
type Type6 = string | number;
type Type7 = Type1 & Type6;
type Type8 = Array<number> ;
type Type9 = ['string', 'number'];
type Container<T> = {
    name : T
}
interface Type10 {
    name: string
}
type Type11 = Type10;
type Type13 =  string & Type9
// 2、类型别名和interface的区别 
https://ishare.58corp.com/articleDetail?id=86691 
