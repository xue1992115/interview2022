// 1、Proxy.revocable返回一个可取消的Proxy的实例
const target = {};
const handler = {};
let { proxy, revoke } = Proxy.revocable(target, handler)
proxy.foo = 123;
console.log(proxy.foo); // 123
revoke()
console.log(proxy.foo); // 报错：Cannot perform 'get' on a proxy that has been revoked

//Proxy.revocable返回的一个对象，对象中包含proxy属性和revoke方法
// proxy属性表示的是Proxy的实例
// revoke是用来取消代理权的，一旦取消代理权，就不能通过代理进行访问了