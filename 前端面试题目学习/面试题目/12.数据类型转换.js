console.log('123' == 123)   // false or true?
console.log('' == null)    // false or true?
console.log('' == 0)        // false or true?
console.log([] == 0)        // false or true?
console.log([] == '')      // false or true?
console.log([] == ![])      // false or true?
console.log(null == undefined) //  false or true?
console.log(Number(null))     // 返回什么？
console.log(Number(''))      // 返回什么？
console.log(parseInt(''))    // 返回什么？
console.log({}+10 )          // 返回什么？
let obj = {
    [Symbol.toPrimitive]() {
        return 200;
    },
    valueOf() {
        return 300;
    },
    toString() {
        return 'Hello';
    }
}
console.log(obj + 200); // 这里打印出来是多少？