// 泛型条件分配
{
    type Type1 = string
    type Type2<T> = T extends  Type1 ? string : boolean
    const type: Type2<string> = 'hanan';
    // 按照原来的方式理解的话，string | number 是不可以赋值给 string的
    // 但是如果泛型传递的是一个联合类型的，那就是分布式有条件类型，
    // 会一个元素一个去赋值，然后返回一个联合类型  string | boolean
    const type2: Type2<string | number> = 'hahahah';

    // 如果不想准确的赋值，可以通过[]
    type Type3<T> = [T] extends [Type1] ? string : boolean
    const type3: Type3<string | number> = false
}
