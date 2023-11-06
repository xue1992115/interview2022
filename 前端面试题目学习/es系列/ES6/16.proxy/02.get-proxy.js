// 1、get操作劫持，拦截某个属性的读取操作，接收三个参数
// target: 目标对象
// propKey:属性名
// receiver: proxy 实例本身（严格地说，是操作行为所针对的对象）,可选
const obj1 = {
    name: "hxx"
}
const proxy1 = new Proxy(obj1, {
    get: function(target, propKey, receiver) {
        if(propKey in target) {
            return target[propKey]
        } else {
            throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.")
        }
    }
})
console.log("get name:", proxy1.name); // hxx
try {
    // console.log("get age:", proxy1.age); // throw error
} catch (error) {
    console.log(error);
}

// 2、get方法可以继承
const proxy2 = new Proxy({}, {
    get(target, propKey, receiver) {
        console.log(propKey, "propKey");
        if(propKey in target) {
            return target[propKey]
        } else {
            throw new ReferenceError("Prop name \"" + propKey + "\" does not exist.")
        }
    }
})
const obj2 = Object.create(proxy2);
obj2.name = "hxx"
console.log("get name:", obj2.name);

// 3、get方法实现数组读取负索引
const arr = ['a', 'b', 'c'];
const proxy3 = new Proxy(arr, {
    get: function(target, propKey, receiver) {
        const index = Number(propKey);
        if(index < 0) {
            propKey = String(target.length + index);
            console.log(propKey);
        }
        return Reflect.get(target, propKey, receiver);
    }
})
console.log("获取数组的元素:", proxy3[-1]);

//4、通过get实现链式操作
const double = n => n * 2;
const pow    = n => n * n;
const reverseInt = n => n.toString().split("").reverse().join("") | 0;
const funs = {
    double, 
    pow, 
    reverseInt
}
const pipe = function(value) {
    const funStack = [];
    const proxy4 = new Proxy({}, {
        get: function(target, propKey) {
            if(propKey === 'get') {
                return funStack.reduce((val, fun) => {
                    return fun(val)
                }, value)
            }
            funStack.push(funs[propKey]);
            return proxy4;
        }
    }); 
    return proxy4;
}
pipe(3).double.pow.reverseInt.get;
console.log(pipe(3).double.pow.reverseInt.get, "链式调用"); // 63

//5、如何一个对象中的属性配置了 不可配置，且不可写，使用proxy访问就会报错
const obj3 = Object.defineProperties({}, {
    name: {
        value: 123,
        writable: false,
        configurable: false
    }
})
const proxy5 = new Proxy(obj3, {
    get: function(target, propKey, receiver) {
        return "abc" // 会报错
        // return target[propKey] // 不会报错，原因应该是上边的return语句重写了对象
    }
});
console.log(proxy5.name);