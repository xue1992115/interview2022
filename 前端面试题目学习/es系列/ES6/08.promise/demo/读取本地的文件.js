// 1、回调函数的形式
// const fs = require('fs');
// fs.readFile('./text.txt', (err, data) => {
//     if(err) throw err;
//     console.log(data.toString());
// });

// 2、promise的形式
const fs = require('fs');
let p = new Promise((resolve, reject) => {
    fs.readFile('./text.txt', (err, data) => {
        if(err) reject(err);
        resolve(data);
    });
})
p.then((value) => {
    console.log(value.toString());
}).catch((error) => {
    console.log(error);
})
