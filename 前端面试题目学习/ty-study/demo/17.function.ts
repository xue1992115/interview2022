// 
{
    const add = (a: number, b: number) => a + b
    // 可选参数
    const add1 = (a: number, b?: number) => a + (b ? b : 0)
    // 默认参数
    const add2 = (a: number, b = 10) => a + (b ? b : 0)
    // 剩余参数
    const add3 = (a: number, ...rest: number[]) => rest.reduce(((a, b) => a + b), a)
    // 重载：函数名称一样，参数不一样
    interface Direction {
        top: number,
        bottom?: number,
        left?: number,
        right?: number
      }
      function assigned(all: number): Direction
      function assigned(all: number): Direction
      function assigned(topAndBottom: number, leftAndRight: number): Direction
      function assigned(top: number, right: number, bottom: number, left: number): Direction
      
      function assigned (a: number, b?: number, c?: number, d?: number) {
        if (b === undefined && c === undefined && d === undefined) {
          b = c = d = a
        } else if (c === undefined && d === undefined) {
          c = a
          d = b
        }
        return {
          top: a,
          right: b,
          bottom: c,
          left: d
        }
      }
      
      assigned(1)
      assigned(1,2)
      assigned(1,2,3)
      assigned(1,2,3,4)
}
