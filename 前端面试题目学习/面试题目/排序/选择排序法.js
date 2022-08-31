// 选择排序法就是 首先将最小的元素存放在序列的起始位置，再从剩余未排序元素中继续寻找最小元素，然后放到已排序的序列后面……以此类推，直到所有元素均排序完毕
const arr = [1, 5, 6, 7, 2, 5, 6, 11, 19];

function chooseSort(arr) {
  const len = arr.length;
  // 设置第一个是最小的
  let min;
  let temp;
  for (var i = 0; i < len - 1; i++) {
    min = i;
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
}
chooseSort(arr);
console.log(arr, "arr");
