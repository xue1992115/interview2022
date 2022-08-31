class Chameleon {
  static colorChange(newColor) {
    this.newColor = newColor;
    return this.newColor;
  }

  constructor({ newColor = "green" } = {}) {
    this.newColor = newColor;
  }
}

const freddie = new Chameleon({ newColor: "purple" });
// 报错：因为colorChange是一个静态的方法，静态的方法只能被他们的构造函数使用，不能传递给
// 实例，因此访问的时候会报错，colorChange is not a function
freddie.colorChange("orange");
