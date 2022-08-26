const url = "http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e";

function serilizeUrl(url) {
  var result = {};
  url = url.split("?")[1];
  var map = url.split("&");
  for (var i = 0, len = map.length; i < len; i++) {
    result[map[i].split("=")[0]] = map[i].split("=")[1];
  }
  return result;
}
console.log(serilizeUrl(url));
