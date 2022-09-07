Promise.resolve(1).then(2).then(Promise.resolve(3)).then(console.log);
// 注意then和catch接受的参数都是一个函数，如果不是函数的话，就会发生值穿透问题
// 第一个then和第二个then传入的都不是函数，因此1传递给第三个then, 所以输出的结果是1
