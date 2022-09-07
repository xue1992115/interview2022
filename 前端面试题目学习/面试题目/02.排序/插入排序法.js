// 插入排序法就是从后往前对比，找出合适的位置放置元素
function insertSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }
}
const arr = [1, 5, 6, 7, 2, 5, 6, 11, 19];
insertSort(arr);
console.log(arr, "arr");
