class Circle{
    constructor(raduis){
        this.raduis=raduis;
    }
    getDiameter(){
    const result= this.raduis+this.raduis;
console.log('Diameter=',result,);

    }
getCircumference(){
const result=Math.round(2*Math.PI*this.raduis);
console.log('Circumference=',result,'m');

}
getArea(){
    const result=Math.round(2*Math.PI*this.raduis*this.raduis);
console.log('Area=',result);

}

}
const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();
