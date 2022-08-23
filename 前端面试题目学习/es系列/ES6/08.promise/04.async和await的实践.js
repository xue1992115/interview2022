const util = require("util");
const fs = require("fs");
// 可以转化成一个promise形式的
const mainReadFile = util.promisify(fs.readFile);
//读取文件内容
async function readFile(file1, file2) {
  try {
    const res1 = await mainReadFile(file1);
    const res2 = await mainReadFile(file2);
    console.log(res1.toString());
    console.log(res2.toString());
  } catch (error) {
    console.log(error, "error");
  }
}

readFile("./01.介绍和基本使用.html", "./03.async和await.html");
