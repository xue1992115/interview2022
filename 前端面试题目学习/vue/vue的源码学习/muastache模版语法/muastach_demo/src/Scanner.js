export default class Scanner {
  constructor(templateStr) {
    this.pos = 0;
    this.tail = templateStr;
    this.templateStr = templateStr;
  }
  // 功能弱就是走过执行的内容，无返回值
  scan(tag) {
    if (this.tail.indexOf(tag) === 0) {
      // tag有长就让pos移动几位， 例如{{长度为2，移动两位
      this.pos += tag.length;
      this.tail = this.templateStr.substring(this.pos);
    }
  }
  //作用就是让指针去扫描，直到遇到指定的内容结束，并且能够返回之前的内容
  scanUtil(stopTag) {
    var pos_back = this.pos;
    // 防止死循环
    while (
      this.tail.indexOf(stopTag) !== 0 &&
      this.pos < this.templateStr.length
    ) {
      this.pos++;
      // str.substr(start[, length]开始位置和截取的长度
      this.tail = this.templateStr.substr(this.pos);
    }
    // substring[) 前闭后开
    return this.templateStr.substring(pos_back, this.pos);
  }
}
