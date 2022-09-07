function add(...args) {
  console.log(args, "e");
  var fn = function (...newArgs) {
    return add.apply(null, args.concat(newArgs));
  };
  fn.toString = function () {
    return args.reduce((total, curr) => total + curr);
  };
  return fn;
}
var res = add(1).toString();
console.log(res, "res");
var res2 = add(1)(2).toString();
console.log(res2, "res2");
add(1)(2)(3);
add(1)(2, 3);
// add(1, 2)(3);
// add(1, 2, 3);
