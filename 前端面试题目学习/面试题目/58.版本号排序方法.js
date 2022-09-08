// 题目描述:有一组版本号如下:
//  ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
// 现在需要对其进行排序，排序的结果为:
//  ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
var arr = ["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"];
function arrSort(arr) {
  return arr.sort((a, b) => {
    var a1 = a.split(".");
    var b1 = b.split(".");
    const len = Math.max(a1.length, b1.length);
    for (var i = 0; i < len; i++) {
      const n1 = Number(a1[i] || 0);
      const n2 = Number(b1[i] || 0);
      if (n1 > n2) return 1;
      if (n1 < n2) return -1;
    }
    return 0;
  });
}
arrSort(arr);
console.log(arr, "arr");
