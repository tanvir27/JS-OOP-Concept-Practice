class Animal{
    static category = 'Dog';
    location = 'Khagrachori';
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }
   static compare(Animal1, Animal2){
        if(Animal1.speed > Animal2.speed){
          return `${Animal1.name} is faster`;
        }
        return `${Animal2.name} is faster`;
    }
} 

const myRat = new Animal('Rat',110);
const myDog = new Animal('Dog',100);
console.log(myRat);
console.log(myRat.category);
console.log(Animal.category); // object na baniyeo access naua jabe
console.log(myRat.location); 
console.log(Animal.location); // static na houay object na baniye access naua jabe na
// console.log(Animal.compare());
console.log(Animal.compare(myRat,myDog)); 