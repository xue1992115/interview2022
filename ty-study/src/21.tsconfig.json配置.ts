
// tsconfig.json文件，那么意味着这个目录是TypeScript项目的根目录
// tsconfig.json文件中指定了用来编译这个项目的根文件和编译选项
// tsconfig.json的主要配置项
{
    // 是一个数组列表，指定文件的相对路径和绝对路径，用来指定编译文件；
    // 这里的编译文件是指的入口文件，任何被入口依赖的文件，编译器会自动的把所有的依赖文件纳为编译对象
    // 如果不指定files的话，就会寻找include，如果没有include,就会从根目录和其子文件
    "files": [],
    // 也是一个数组，但数组元素类似glob的文件模式，它支持glob通配符
    // *：匹配 0 或多个字符（注意：不含路径分隔符）
    // ?：匹配任意单个字符（注意：不含路径分隔符）
    // **/ ：递归匹配任何子路径
    // 这里可以指定目录又可以指定文件，上边的files只能指定文件
    // ts文件扩展名为.ts、.tsx或.d.ts的文件，如果开启了allowJs选项，那 .js 和 .jsx 文件也属于 TS 文件，因此一个目录下只有上述文件才会被编译。
    "include": [],
    // exclude可以排除一些文件
    // include/exclude/files三者之间的关系
    // 首先我们明确一点，exclude 是有默认值的，如果我们没有设置 exclude ，那其默认值为 node_modules 、bower_components、jspm_packages 和编译选项 outDir 指定的路径
    // files 的优先级是最高的，比如我们在 files 中指定了一些文件，但是又在 exclude 中把它们排除了，这是无效的，因为 files 的优先级更高，这些文件依然会被编译，但是如果 include 中包含，那么依然会被排除，由此可见这三者的优先级如下
    // files > exclude > include
    // 如果 files 和 include 都未设置，那么除了 exclude 排除的文件，编译器会默认包含路径下的所有 TS 文件。
    "exclude": [],
    // 在最顶层设置compileOnSave标记，可以让IDE在保存文件的时候根据tsconfig.json重新生成文件。
    "compileOnSave": false,
    // 实现配置复用，即一个配置文件可以继承另一个文件的配置属性
    // 继承./configs/base中的配置
    // 注意：继承者中的同名配置会覆盖被继承者
    // 所有相对路径都被解析为其所在文件的路径
    "extends": "./configs/base",
    // 重点，也是内容最多的地方
    // 1、基础选项
    // 2、类型检查选项
    // 3、额外检测选项
    // 4、模块解析选项
    // 5、source map选项
    // 6、实验选项
    "compilerOptions": {
        // 用于指定编译后的目标代码，比如我们想编译为 ES5 或者 ES2015
        "target": "ES5"｜ "ES2015",
        // 于我们指定模块的标准，比如 amd、umd、commonjs、esnext 等等
        "module": "umd",
        // 指定在编译过程中需要包含进来的库文件，比如要
        // 编译一些与浏览器Dom相关的代码，就需要引入DOM库
        // 如果需要编译ES2015相关代码，需要引入ES2015库
        "lib": "",
        // allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件
        "allowJs": false,
        // 用来设置是否检查和js文件中的错误
        "checkJs": false,
        // 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'，用于编译 jsx 代码
        "jsx": false,
        // 指定生成目标为react JSX时，使用的JSX工厂函数，比如 React.createElement或 h
        "jsxFactory": false,
        // 用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true
        "declaration": false,
        // 指定是否为声明文件.d.ts生成map文件
        "declarationMap": false,
        // 用来指定编译时是否生成.map文件
        "sourceMap": false,
        // outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/index.js"，则将所有的文件输出为一个名为index.js的单一文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置
        "outFile": "./dist/index.js",
        // 指定输出目录
        "rootDir": "",
        // 删除所有注释，除了以 /!*开头的版权信息。
        "removeComments": "",
        // 不生成输出文件
        "noEmit": ""
    }
}

// 类型检查选项
// 类型检查选项，主要是配置肤哦Typescript检查的严苛程度
// 通常情况下，选择比较严苛的程序，所以建议开启strict模式
// strict: 启动类型检查，如果设为true则会同时开启下面这几个严格类型检查，
// noImplicitAny: 如果没有设置明确的类型，编译器会自定默认为any，如果设置了strict，则会报错
// strictNullChecks： 在严格的 null 检查模式下， null 和 undefined 值不包含在任何类型里，只允许用它们自己和 any 来赋值
// strictPropertyInitialization：类型是否要初始化，确保类的非 undefined 属性已经在构造函数里初始化，若要令此选项生效，需要同时启用 --strictNullChecks
// strictBindCallApply： ：对 bind call apply 更严格的类型检测，比如如下可以检测出 apply 函数参数数量和类型的错误：
function foo(a: number, b: string): string {
    return a + b;
  }
let a = foo.apply(undefined, [10]); // error: too few argumnts
// alwaysStrict：始终以严格模式解析并为每个源文件生成 "use strict"语句，开启这个选项是一个好习惯，这可以帮助我们规避很多 JavaScript 遗留的一些怪异现象


// 额外检测选项
// noUnusedLocals 当一个变量声明，但未使用则抛错
// noUnusedParameters 当一个参数声明后没使用，也报错
// noImplicitReturns 当函数的有的返回路径没有返回值时报错
// noImplicitThis 当 this 为 any 类型的时候报错
// noFallthroughCasesInSwitch 当 switch 中没有使用 break 跳出时报错


// 模块解析选项
// 模块解析非常常用，我们有时候要用到路径别名的时候就需要对模块解析选项进行配置。
// baseUrl：解析非相对模块名的基准目录，设置 baseUrl 来告诉编译器到哪里去查找模块，所有非相对模块导入都会被当做相对于 baseUrl
// paths：路径映射，使用 paths 的前提是 baseUrl 必须被指定，比如我们要映射 src/Views 目录，如何映射取决于 baseUrl 是什么，比如 baseUrl 为 ./，那么：
{
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
        "views": ["src/Views"] // 此处映射是相对于"baseUrl"
      }
    }
  }
//   如果 baseUrl 为 ./src/，那么：
{
    "compilerOptions": {
      "baseUrl": "./src",
      "paths": {
        "views": ["Views"] // 此处映射是相对于"baseUrl"
      }
    }
  }

// rootDirs： rootDirs可以指定一个路径列表，列表里的内容会在运行时被合并
// typeRoots: 默认所有可见的 "@types" 包会在编译过程中被包含进来，node_modules/@types 文件夹下以及它们子文件夹下的所有包都是可见的,但是如果指定了typeRoots，只有typeRoots下面的包才会被包含进来
// types: 如果指定了types，只有被列出来的包才会被包含进来,比如：
{
    "compilerOptions": {
         "types" : ["node", "lodash", "express"]
    }
 }
//  Source Map 选项
// sourceRoot：指定TypeScript源文件的路径，以便调试器定位
// sourceMap：生成相应的 .map文件
// inlineSources：将代码与sourcemaps生成到一个文件中，要求同时设置了 --inlineSourceMap或 --sourceMap属性

// 实验选项
// experimentalDecorators： 启用实验性的ES装饰器，在装饰器章节我们提到过
// emitDecoratorMetadata：给源码里的装饰器声明加上设计类型元数据，这个在我们 Reflect.Metadata 的章节也提到过


// 详细的配置项
{
    "compilerOptions": {
      /* Basic Options */
      "target": "es5" /* target用于指定编译之后的版本目标: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019' or 'ESNEXT'. */,
      "module": "commonjs" /* 用来指定要使用的模块标准: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
      "lib": ["es6", "dom"] /* lib用于指定要包含在编译中的库文件 */,
      "allowJs": true,                       /* allowJs设置的值为true或false，用来指定是否允许编译js文件，默认是false，即不编译js文件 */
      "checkJs": true,                       /* checkJs的值为true或false，用来指定是否检查和报告js文件中的错误，默认是false */
      "jsx": "preserve",                     /* 指定jsx代码用于的开发环境: 'preserve', 'react-native', or 'react'. */
      "declaration": true,                   /* declaration的值为true或false，用来指定是否在编译的时候生成相应的".d.ts"声明文件。如果设为true，编译每个ts文件之后会生成一个js文件和一个声明文件。但是declaration和allowJs不能同时设为true */
      "declarationMap": true,                /* 值为true或false，指定是否为声明文件.d.ts生成map文件 */
      "sourceMap": true,                     /* sourceMap的值为true或false，用来指定编译时是否生成.map文件 */
      "outFile": "./dist/main.js",                       /* outFile用于指定将输出文件合并为一个文件，它的值为一个文件路径名。比如设置为"./dist/main.js"，则输出的文件为一个main.js文件。但是要注意，只有设置module的值为amd和system模块时才支持这个配置 */
      "outDir": "./dist",                        /* outDir用来指定输出文件夹，值为一个文件夹路径字符串，输出的文件都将放置在这个文件夹 */
      "rootDir": "./",                       /* 用来指定编译文件的根目录，编译器会在根目录查找入口文件，如果编译器发现以rootDir的值作为根目录查找入口文件并不会把所有文件加载进去的话会报错，但是不会停止编译 */
      "composite": true,                     /* 是否编译构建引用项目  */
      "removeComments": true,                /* removeComments的值为true或false，用于指定是否将编译后的文件中的注释删掉，设为true的话即删掉注释，默认为false */
      "noEmit": true,                        /* 不生成编译文件，这个一般比较少用 */
      "importHelpers": true,                 /* importHelpers的值为true或false，指定是否引入tslib里的辅助工具函数，默认为false */
      "downlevelIteration": true,            /* 当target为'ES5' or 'ES3'时，为'for-of', spread, and destructuring'中的迭代器提供完全支持 */
      "isolatedModules": true,               /* isolatedModules的值为true或false，指定是否将每个文件作为单独的模块，默认为true，它不可以和declaration同时设定 */
  
      /* Strict Type-Checking Options */
      "strict": true /* strict的值为true或false，用于指定是否启动所有类型检查，如果设为true则会同时开启下面这几个严格类型检查，默认为false */,
      "noImplicitAny": true,                 /* noImplicitAny的值为true或false，如果我们没有为一些值设置明确的类型，编译器会默认认为这个值为any，如果noImplicitAny的值为true的话。则没有明确的类型会报错。默认值为false */
      "strictNullChecks": true,              /* strictNullChecks为true时，null和undefined值不能赋给非这两种类型的值，别的类型也不能赋给他们，除了any类型。还有个例外就是undefined可以赋值给void类型 */
      "strictFunctionTypes": true,           /* strictFunctionTypes的值为true或false，用于指定是否使用函数参数双向协变检查 */
      "strictBindCallApply": true,           /* 设为true后会对bind、call和apply绑定的方法的参数的检测是严格检测的 */
      "strictPropertyInitialization": true,  /* 设为true后会检查类的非undefined属性是否已经在构造函数里初始化，如果要开启这项，需要同时开启strictNullChecks，默认为false */
     "noImplicitThis": true,                /* 当this表达式的值为any类型的时候，生成一个错误 */
      "alwaysStrict": true,                  /* alwaysStrict的值为true或false，指定始终以严格模式检查每个模块，并且在编译之后的js文件中加入"use strict"字符串，用来告诉浏览器该js为严格模式 */
  
      /* Additional Checks */
      "noUnusedLocals": true,                /* 用于检查是否有定义了但是没有使用的变量，对于这一点的检测，使用eslint可以在你书写代码的时候做提示，你可以配合使用。它的默认值为false */
      "noUnusedParameters": true,            /* 用于检查是否有在函数体中没有使用的参数，这个也可以配合eslint来做检查，默认为false */
      "noImplicitReturns": true,             /* 用于检查函数是否有返回值，设为true后，如果函数没有返回值则会提示，默认为false */
      "noFallthroughCasesInSwitch": true,    /* 用于检查switch中是否有case没有使用break跳出switch，默认为false */
  
      /* Module Resolution Options */
      "moduleResolution": "node",            /* 用于选择模块解析策略，有'node'和'classic'两种类型' */
      "baseUrl": "./",                       /* baseUrl用于设置解析非相对模块名称的基本目录，相对模块不会受baseUrl的影响 */
      "paths": {},                           /* 用于设置模块名称到基于baseUrl的路径映射 */
      "rootDirs": [],                        /* rootDirs可以指定一个路径列表，在构建时编译器会将这个路径列表中的路径的内容都放到一个文件夹中 */
      "typeRoots": [],                       /* typeRoots用来指定声明文件或文件夹的路径列表，如果指定了此项，则只有在这里列出的声明文件才会被加载 */
      "types": [],                           /* types用来指定需要包含的模块，只有在这里列出的模块的声明文件才会被加载进来 */
      "allowSyntheticDefaultImports": true,  /* 用来指定允许从没有默认导出的模块中默认导入 */
      "esModuleInterop": true /* 通过为导入内容创建命名空间，实现CommonJS和ES模块之间的互操作性 */,
      "preserveSymlinks": true,              /* 不把符号链接解析为其真实路径，具体可以了解下webpack和nodejs的symlink相关知识 */
  
      /* Source Map Options */
      "sourceRoot": "",                      /* sourceRoot用于指定调试器应该找到TypeScript文件而不是源文件位置，这个值会被写进.map文件里 */
      "mapRoot": "",                         /* mapRoot用于指定调试器找到映射文件而非生成文件的位置，指定map文件的根路径，该选项会影响.map文件中的sources属性 */
      "inlineSourceMap": true,               /* 指定是否将map文件的内容和js文件编译在同一个js文件中，如果设为true，则map的内容会以//# sourceMappingURL=然后拼接base64字符串的形式插入在js文件底部 */
      "inlineSources": true,                 /* 用于指定是否进一步将.ts文件的内容也包含到输入文件中 */
  
      /* Experimental Options */
      "experimentalDecorators": true /* 用于指定是否启用实验性的装饰器特性 */
      "emitDecoratorMetadata": true,         /* 用于指定是否为装饰器提供元数据支持，关于元数据，也是ES6的新标准，可以通过Reflect提供的静态方法获取元数据，如果需要使用Reflect的一些方法，需要引入ES2015.Reflect这个库 */
    }
    "files": [], // files可以配置一个数组列表，里面包含指定文件的相对或绝对路径，编译器在编译的时候只会编译包含在files中列出的文件，如果不指定，则取决于有没有设置include选项，如果没有include选项，则默认会编译根目录以及所有子目录中的文件。这里列出的路径必须是指定文件，而不是某个文件夹，而且不能使用* ? **/ 等通配符
    "include": [],  // include也可以指定要编译的路径列表，但是和files的区别在于，这里的路径可以是文件夹，也可以是文件，可以使用相对和绝对路径，而且可以使用通配符，比如"./src"即表示要编译src文件夹下的所有文件以及子文件夹的文件
    "exclude": [],  // exclude表示要排除的、不编译的文件，它也可以指定一个列表，规则和include一样，可以是文件或文件夹，可以是相对路径或绝对路径，可以使用通配符
    "extends": "",   // extends可以通过指定一个其他的tsconfig.json文件路径，来继承这个配置文件里的配置，继承来的文件的配置会覆盖当前文件定义的配置。TS在3.2版本开始，支持继承一个来自Node.js包的tsconfig.json配置文件
    "compileOnSave": true,  // compileOnSave的值是true或false，如果设为true，在我们编辑了项目中的文件保存的时候，编辑器会根据tsconfig.json中的配置重新生成文件，不过这个要编辑器支持
    "references": [],  // 一个对象数组，指定要引用的项目
  }
