function hd(): never {
    throw new Error("出错了")
}
let xj: string = '测试';
xj = hd();
