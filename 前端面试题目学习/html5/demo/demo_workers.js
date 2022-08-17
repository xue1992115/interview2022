// 接受数据
this.onmessage = function(event) {
    console.log(event.data, 'ddd');
}
var i = 0;
// setInterval(() => {
//     i++;
//     postMessage(i)
// }, 1000);