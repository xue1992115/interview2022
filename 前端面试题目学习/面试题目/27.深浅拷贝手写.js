// 浅拷贝
function copy(obj, copyObj) {
  for (var i in obj) {
    copyObj[i] = obj[i];
  }
  return copyObj;
}

// 深拷贝
function copyDeeply(obj, copyObj) {
  for (var i in obj) {
    if (typeof obj[i] === "object") {
      copyObj[i] = obj[i].constructor === Array ? [] : {};
      copyDeeply(obj[i], copyObj[i]);
    } else {
      copyObj[i] = obj[i];
    }
  }
  return copyObj;
}
const obj = {
  name: "tets",
  age: 10,
  otherInfo: {
    heigth: 160,
  },
};
var programer = {
  language: "js",
};
console.log(copy(obj, programer));
programer.otherInfo.heigth = 120;
console.log(programer, "programer");
console.log(obj, "obj");
console.log(copyDeeply(obj, programer));
programer.otherInfo.heigth = 130;
console.log(programer, "programer");
console.log(obj, "obj");
