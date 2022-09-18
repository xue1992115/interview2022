function getMin(s) {
  // Write your code here
  var arr = s.split("");
  var res = [];
  var len = arr.length;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (arr[i] == "(") {
      res.push(arr[i]);
    } else {
      var item = res.pop();
      if (!item) {
        count++;
      }
    }
  }
  return count + res.length;
}
const res = getMin("()()");
console.log(res);
