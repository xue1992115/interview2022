// 1、抽象类
// 抽象类做为其它派生类的基类使用,它们一般不会直接被实例化,不同于接口,抽象类可以包含成员的实现细节。
// abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。
abstract class Animal2 {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}
// 我在实例化此抽象类会报错：
// const animal = new Animal2()
// 我们不能直接实例化抽象类，通常需要我们创建子类继承基类,然后可以实例化子类。
class Cat extends Animal2 {

    makeSound() {
        console.log('miao miao')
    }
}

const cat = new Cat()

cat.makeSound() // miao miao
cat.move() // roaming the earch...
// 2、访问限定符
class Car {
    // 在 TypeScript 的类中，成员都默认为 public, 被此限定符修饰的成员是可以被外部访问。
    public run() {
        console.log('启动...')
    }
    // 当成员被设置为 private 之后, 被此限定符修饰的成员是只可以被类的内部访问。
    // private run() {
    //     console.log('启动...')
    // }
    // 当成员被设置为 protected 之后, 被此限定符修饰的成员是只可以被类的内部以及类的子类访问。
    // protected run() {
    //     console.log('启动...')
    // }
}

const car = new Car()

car.run() // 启动...

