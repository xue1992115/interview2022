var convert = function (s, numRows) {
  if (s.length === 1 || numRows === 1) return s; //  注意这里！！
  let groupLen = numRows * 2 - 2;
  let array = new Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
    let rem = i % groupLen; // 余数
    console.log(rem, "ji su");
    if (rem <= numRows - 1) {
      array[rem] += s[i];
    } else {
      array[groupLen - rem] += s[i];
    }
  }
  return array.join("");
};
convert("PAYPALISHIRING", 4);
