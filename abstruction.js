class Animal{
    constructor(){

    }
    talk(){
        // console.log('make some noise');
        throw new Error("You must implement talk method")
    }
}
class Cat extends Animal{
    talk(){
        console.log('meow neow');
    }
}
class Dog extends Animal{
    talks(){
        console.log('Bark Bark');
    }
    talk(){
       this.talks();
    }

}
const myCat = new Cat();
myCat.talk();
const myDog = new Dog();
myDog.talk();