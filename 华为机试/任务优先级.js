var arr = ["2", "2", "2", "3"];
var num = 2;
var time = 0;
var obj = {};
var maxCount = 0; // 任务次数
var maxNum = 0; // 次数做多的任务
var len = arr.length;
for (var i = 0; i < len; i++) {
  var item = arr[i];
  if (obj[item]) {
    obj[item] += 1;
    if (obj[item] > maxCount) {
      maxCount = obj[item];
    }
  } else {
    obj[item] = 1;
  }
}
for (var key in obj) {
  if (obj[key] == maxCount) {
    maxNum += 1;
  }
}
time = Math.max((maxCount - 1) * (num + 1) + maxNum, arr.length);
console.log(time);
