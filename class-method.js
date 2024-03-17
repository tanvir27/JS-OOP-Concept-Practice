class Hero {
    constructor(name,power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        if(this.power){
            return this.power;
        }
        return 'I have No Power';
    }
    goForGrocery(){
        if(this.power){
            console.log(this.getPower());
        }
        return 'Price is too High';
    }
}
const catMan = new Hero('Catman','Khamsi');
//console.log(catMan.getPower());
console.log(catMan.goForGrocery());