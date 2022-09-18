function isPrime(n) {
  if (n == 2) return 1;
  // Write your code here
  var arr = [];
  var num = 2;
  while (num * num <= n) {
    if (n % num === 0) {
      n = n / 2;
      arr.push(num);
    } else {
      num++;
    }
  }
  if (arr.length >= 1) {
    return arr[0];
  } else {
    return 1;
  }
}
const res = isPrime(37961921);
console.log(res);
