// class类别
{
    // 抽象类
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log('roaming the earch...');
        }
    }
    // 实例化抽象类回报错
    // 通常是创建子类继承基类，然后可以实例化子类
    // const animal = new Animal()
    class Cat extends Animal {

        makeSound() {
            console.log('miao miao')
        }
    }
    
    const cat = new Cat()
    // 访问限定符号
    // private
    // public
    // protected
}
