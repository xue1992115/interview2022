// 1、什么是防抖和节流函数？
// 这两个函数本质上优化高频执行代码的一种手段
// 2、节流
// n秒内之运行一次，如果n秒内重复触发，还是只运行一次
// 3、防抖
// n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时
// 4、防抖和节流就像电梯一样
// 节流就是像是电梯进来一个人，等15秒准时运送一次
// 防抖就是进来一个人等15秒，如果过程中有人在进来，15秒重新计时，直到15秒之后，在去运送

// 节流 计时+定时器（每次点击，定时器的时间根据剩余的时间重新定时）
window.throttled = function (fn, delay) {
  let timer = null;
  // 计算开始的时间
  let startTime = Date.now();
  return function () {
    // 计算当前的时间
    let curTime = Date.now();
    // 计算剩余的时间
    let remaining = delay - (curTime - startTime);
    // 存储上下文
    let context = this;
    // 存储参数
    let args = arguments;
    // 清楚定时器
    clearTimeout(timer);
    if (remaining < 0) {
      fn.apply(context, args);
      startTime = Date.now();
    } else {
      // 重新设置定时器
      timer = setTimeout(fn, remaining);
    }
  };
};

// 防抖：也是使用定时器
window.debounce = function (fn, wait, immediate) {
  let timer;
  return function () {
    const context = this;
    const args = argument;
    if (timer) clearTimeout(timer);
    // 是否是立即执行
    if (immediate) {
      // 如果没有设置定时器
      callnow = !timer;
      // 设置定时器，定时器时间到了，在执行一次
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      // 立即执行第一次
      if (callnow) {
        fn.apply(context, args);
      }
      // 如果不是立即执行就设置定时器
    } else {
      setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    }
  };
};
