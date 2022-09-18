const regularExpression = new RegExp(/^[a-z]{5}\_?[0-9]{0,4}@hackerrank.com$/);
var res = regularExpression.test("julia_0@hackerrank.com");
console.log(res, 'res')