// 采用递归+setTimeout的方式
function mySetInterval(fn, time = 3000) {
  let timer = null;
  function interval() {
    fn();
    timer = setTimeout(interval, time);
  }
  timer = setTimeout(interval, time);
}

mySetInterval(() => {
  console.log("han");
}, 3000);
