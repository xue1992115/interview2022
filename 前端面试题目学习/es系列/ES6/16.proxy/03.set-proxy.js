// 1、set用来拦截某个属性的赋值的操作
// target: 目标对象
// propKey:属性名
// propValue:属性值
// receiver: proxy 实例本身（严格地说，是操作行为所针对的对象）,可选
const proxy1 = new Proxy({}, {
    set: function(target, propKey, propValue, receiver) {
        if(propKey === 'age') {
            if(!Number.isInteger(propValue)) {
                throw new TypeError("The age is not an integer")
            }
            if(propValue > 200) {
                throw new TypeError("The age seems invalid")
            }
        }
        target[propKey] = propValue;
        return true;
    }
})
proxy1.age = 100;
console.log(proxy1.age);

// 2、通过set设置防止内部的以_开头的私有属性被读取&改写
const proxy2 = new Proxy({}, {
    get: function(target, propKey, receiver) {
        invariant(propKey, 'get');
        return target[propKey]
    },
    set: function(target, propKey, propValue, receiver) {
        invariant(propKey, 'set');
        target[propKey] = propValue;
        return true
    }
})
function invariant (key, action) {
    if (key[0] === '_') {
        throw new Error(`Invalid attempt to ${action} private "${key}" property`);
    }
}
try {
    console.log(proxy2._prop)
} catch (error) {
    console.log(error);
}

// 3、如果对象是不可写的，set是不作用的
const obj = Object.defineProperties({}, {
    name: {
        value: 123,
        writable: false,
    }
})
const proxy3 = new Proxy(obj, {
    set: function(target, propKey, propValue, receiver) {
        target[propKey] = propValue;
        return true;
    }
});
proxy3.name = 'baz';
console.log("proxy3:", proxy3.name);

// 4、以上注意set严格模式下需要返回一个布尔值，如果没有返回，就会报错