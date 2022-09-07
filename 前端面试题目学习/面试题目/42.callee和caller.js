const obj = {
  a: function () {
    // caller是返回一个函数的引用，这个函数调用了当前的函数。
    console.log(this.a.caller);
    // callee放回正在执行的函数本身的引用，它是arguments的一个属性
    console.log(arguments.callee);
  },
};

obj.a();
