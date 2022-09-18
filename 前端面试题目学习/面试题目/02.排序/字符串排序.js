var str = "Type";
var res = {};
var len = str.length;
for (var i = 0; i < len; i++) {
  if (/[A-Z]/.test(str[i])) {
    res[str[i].toLowerCase()] = str[i];
  }
}
var test = str.toLowerCase().split("").sort();
for (let index = 0; index < len; index++) {
  if (res[test[index]]) {
    test[index] = res[test[index]];
  }
}
console.log(test.join(""));
