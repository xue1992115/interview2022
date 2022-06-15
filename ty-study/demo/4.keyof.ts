// keyof是索引类型查询操作符号
// keyof可以获取基本的数据类型，如字符串，数字，接口，类, 枚举的索引类型，最后返回的是一个联合类型

import { VoidExpression } from 'typescript'

// keyof后跟的是一个类型，而不是一个数值
{
    // 字符串类型索引类型
    type TypeStr = keyof string;
    const str: TypeStr = 'includes';
    // null类型索引类型
    type TypeNull = keyof null;
    const str2: TypeNull[] = []
    // 数字类型索引类型
    type TypeNum = keyof number;
    const str3: TypeNum = 'toFixed';
    // boolean类型索引类型
    type TypeBoolean = keyof boolean;
    const str4:TypeBoolean = 'valueOf';
    // void类型索引类型
    type TypeVoid = keyof void;
    const str5: TypeVoid[] = [];
    // undefined类型索引类型
    type TypeUnd = keyof undefined;
    const str6:TypeUnd[] = [];
    // bigint类型索引类型
    type TypeBig = keyof bigint;
    const str7:TypeBig = 'toString';
    // symbol类型索引类型
    type TypeSym = keyof symbol;
    const str8:TypeSym = 'description';
    // 对象类型索引类型
    type TypeObj = keyof {name: string,age: number};
    const str9: TypeObj = 'name'
    // 数组类型索引类型
    type TypeArray = keyof string[];
    const str10: TypeArray = 'entries';
    // 元组类型索引类型
    type TypeTupleArray = keyof [string, number];
    const str11: TypeTupleArray = 'entries';
    // 接口类型索引类型
    interface User {
        name: string,
        age: number
    }
    type TypeInterface = keyof User;
    const str12: TypeInterface = 'age';
    // 枚举类型索引类型
    enum Direction {
        Up,
        Down,
        Left,
        Right
    }
    type TypeEnum = keyof Direction;
    const str13: TypeEnum = 'toExponential';
    // 联合类型索引类型
    type TypeT = keyof (string | number);
    const str14: TypeT = 'toString';

    // 具体的使用场景,获取某个属性
    function getAttribute<T>(obj: T, key: keyof T): T[keyof T] {
        return obj[key]
    }
    getAttribute({name: '小明', age: 18}, 'name')
}
