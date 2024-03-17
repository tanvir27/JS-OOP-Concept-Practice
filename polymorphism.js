class Circle{
    constructor(radius){
        this.radius = radius;
    }
    area(){
        return Math.PI * Math.pow(this.radius,2);
    }
}

class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height * this.width;
    }
}

class Triangle{
    constructor(base,height){
        this.base = base;
        this.height =height;
    }
    area(){
        return this.base * this.height /2;
    }
}

const Shapes = [new Circle(10), new Triangle(10,10), new Circle(20), new Rectangle(10,5)];

for (let i = 0; i < Shapes.length; i++) {
    const Shape = Shapes[i];
    console.log(Shape.area());
}