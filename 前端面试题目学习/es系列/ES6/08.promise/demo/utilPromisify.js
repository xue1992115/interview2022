// util.promisify() 就是传入一个函数，返回一个promise风格的方法
// 引入util模块
const util = require('util');
const fs = require('fs');

let mainReadFil = util.promisify(fs.readFile);
mainReadFil('./text.txt').then((value) => {
    console.log(value.toString());
})
console.log(mainReadFil);