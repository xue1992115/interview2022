// 在数据集之中，找一个基准点
// 建立两个数组，分别存储左边和右边的数组
// 利用递归进行下次比较
const arr = [1, 2, 4, 5, 6, 2, 3, 5, 7, 9, 7, 10, 44];
function quickSort(arr) {
  if (arr.length == 0) {
    return []; // 返回空数组
  }

  var cIndex = Math.floor(arr.length / 2);
  console.log(cIndex);
  // 找到中间的数
  var c = arr.splice(cIndex, 1);
  var l = [];
  var r = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < c) {
        // 小于c的放左边，否则放右边
      l.push(arr[i]);
    } else {
      r.push(arr[i]);
    }
  }

  return quickSort(l).concat(c, quickSort(r));
}
console.log(quickSort(arr));
