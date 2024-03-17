class smartDevice{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    charging(){
        console.log('I am eating Electron');
    }
}
class Phone extends smartDevice{
    constructor(name,price,camera){
        super(name,price);
        this.camera = camera;
    }
}

class Watch extends smartDevice{
    constructor(name,price,distance){
        super(name,price);
        this.distance = distance;
    }
}

class Tablet extends smartDevice{
    constructor(name,price,isWifi){
        super(name,price);
        this.isWifi = isWifi;
    }
}

const samsu = new Phone('Samsung', 20000, '48 MP');
console.log(samsu);
samsu.charging();
const samsu2 = new Watch('Nokia', 20000, '100m');
console.log(samsu2);