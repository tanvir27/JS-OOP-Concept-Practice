class Pendrive {
    constructor(capacity,color,price){
        this.capacity = capacity;
        this.color = color;
        this.price = price;
    }
}

const ignite = new Pendrive('32 Gb','White',1300);
console.log(ignite);
const hp = new Pendrive('16 Gb','Black');
console.log(hp);