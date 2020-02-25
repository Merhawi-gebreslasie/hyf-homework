

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        console.log(this.radius * 2
        );
    }
    getCircumference() {
        console.log(this.radius * 2 * PI);


    }
    getArea() {
        console.log(this.radius * this.radius * PI
        );

    }
}
const circle = new Circle(10);
circle.getDiameter(); // 20