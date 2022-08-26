
// 参考的文章：https://ths.js.org/2020/10/13/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F/#1-%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B%E8%8C%83%E5%BC%8F
// 一高阶函数
// 1、高阶函数
// 高阶函数就是参数是一个函数，返回值是函数就称为高阶函数
// 2、高阶函数的意义
// 抽象可以帮助我们屏蔽细节，只需要关注我们的目标
// 高阶函数用来抽象通用的问题
// 3、应用例子
// map遍历指定函数处理每一个元素
// every判断每一个元素是否符合指定条件
// some判断数组中是否至少一个元素满足条件
// find 返回数组中满足提供的测试函数的第一个元素的值，如果未找到，则返回 undefined
// indIndex 找到满足条件的第一个元素，返回其位置，如果未找到，则返回-1

// 二闭包

// 三纯函数
// 纯函数就是相同的输入返回的结果是相同的，没有任何副作用；
// 因为纯函数相同的输入永远会等到相同的输出，所以可以把纯函数结果缓存
// slice

// 四柯里化函数
// 柯里化是将多元函数转换成一元函数
// 当一个函数有多个参数的时候，先传递一部分参数调用它（这部分参数以后永远不变）
// 然后返回一个新的函数接受剩余的参数，直达参数接收完毕才返回结果

// 五函数组合
// 函数组合(compose)：如果一个函数要经过多个函数处理才能得到最终值，这个时候可以把中间过程的函数合并成一个函数。
// 函数就像是数据的管道，函数组合就是把这些管道连接起来，让数据穿过多个管道形成最终结果
// 函数组合默认是从右到左执行
// 函数组合后只接受一个参数
// 函数组合演示
function reverse(array) {
  return array.reverse();
}

function first(array) {
  return array[0];
}

function compose(f, g) {
  return function (value) {
    return f(g(value));
  };
}

const last = compose(first, reverse);

console.log(last([1, 2, 3, 4])); 