onmessage = function(event) {
    calu(event.data)
}
function calu(data) {
    var sum = 0;
    for(var i = 0; i <= data; i++) {
        sum = sum + i;
    }
    postMessage(sum)
}