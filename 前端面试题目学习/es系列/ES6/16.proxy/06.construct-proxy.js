// 1、construct方法用于拦截new方法创建新对象
// 接收三个参数：
// target: 目标对象
// args: 构造函数的参数数组
// newTarget：创造实例对象时，new命令作用的构造函数, 如下例子中的proxy
const proxy1 = new Proxy(function () {}, {
    construct: function(target, args) {
      console.log('called: ' + args.join(', '));
      return { value: args[0] * 10 };
    //   return 1   // construct()方法返回的必须是一个对象，否则会报错。
    }
  });
  console.log(new proxy1(1).value);
// 2、construct的target必须是一个函数，否则爆错
  const proxy2 = new Proxy({}, {
    construct: function(target, argumentsList) {
      return {};
    }
  });
  
  try {
    new proxy2() // 报错
  } catch (error) {
    console.log(error);
  }

// 3、construct中的this指向为handler, 而不是实例对象
const handler =  {
    construct: function(target, args) {
        console.log(this, 'this')
        console.log(this === handler, 'this === handler')
      return { value: args[0] * 10 };
    }
}
const proxy3 = new Proxy(function () {}, handler);