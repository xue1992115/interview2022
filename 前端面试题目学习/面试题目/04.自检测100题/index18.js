const name = "Lydia";
age = 21;
// delete 返回一个布尔值，删除成功true,否则false
// 使用var const let声明的不能使用delete删除
// age相当于是一个全局的变量，删除为true
console.log(delete name); // false
console.log(delete age); // true
