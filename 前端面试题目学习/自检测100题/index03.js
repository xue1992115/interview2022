const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};
// 考察的是箭头函数的this指向问题
shape.diameter(); // 20
shape.perimeter(); // NaN
