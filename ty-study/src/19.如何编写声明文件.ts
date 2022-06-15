// https://github.com/DefinitelyTyped/DefinitelyTyped
// Github 上有一个库 DefinitelyTyped 它定义了市面上主流的JavaScript 库的 d.ts ,而且我们可以很方便地用 npm 引入这些 d.ts。
// npm install @types/jquery -save


// 除了上述提供的库之外，有时候我们还需要自己编写d.ts文件
// 关键字 declare 表示声明的意思,我们可以用它来做出各种声明:

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型

// 声明变量
// declare var/let/const,全局变量的声明可以说是最简单的了,虽然 var/let/const 都可以使用的,但是通常情况下全局变量是不允许改动的,大多数情况下还是以 const 为主
// src/jQuery.d.ts
// declare const jQuery: (selector: string) => any;

// 声明函数 用来声明全局函数
// src/jQuery.d.ts
// declare function jQuery(selector: string): any;


// 声明类
// declare class 用于声明全局类
// src/Person.d.ts

// declare class Person {
//     name: string;
//     constructor(name: string);
//     say(): string;
// }

//  声明枚举
// declare enum 是于声明全局枚举类型
// src/Directions.d.ts

// declare enum Directions {
//     Up,
//     Down,
//     Left,
//     Right
// }

// 声明命名空间
// src/jQuery.d.ts

// declare namespace jQuery {
//     function ajax(url: string, settings?: any): void;
// }

// 声明interface和type
// src/jQuery.d.ts

interface AjaxSettings {
    method?: 'GET' | 'POST'
    data?: any;
}
declare namespace jQuery {
    function ajax(url: string, settings?: AjaxSettings): void;
}

// 声明合并
// src/jQuery.d.ts

declare function jQuery(selector: string): any;
declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}
// src/index.ts

jQuery('#foo');
jQuery.ajax('/api/get_something');

// 自动生成声明文件
// 如果库的源码本身就是由 ts 写的，那么在使用 tsc 脚本将 ts 编译为 js 的时候，添加 declaration 选项，就可以同时也生成 .d.ts 声明文件了.
// 修改编辑，直接生成声明语句
// {
//     "compilerOptions": {
//         "module": "commonjs",
//         "outDir": "lib",
//         "declaration": true,
//     }
// }

