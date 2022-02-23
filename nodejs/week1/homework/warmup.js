console.log("inside warmup file");
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  getDiameter(){
   console.log('Daimeter: '+2*this.radius);
   
  }
  getCircumference(){
    
    console.log('Circumference: '+Math.round(2*Math.PI*this.radius));
  }
  getArea(){
    console.log('Area: '+ Math.round(2*Math.PI*this.radius**2));

  }
}
const circle = new Circle(10);
circle.getDiameter(); // 20
circle.getCircumference();
circle.getArea();
const circle1 = new Circle(7);
circle1.getDiameter(); // 14
circle1.getCircumference();
circle1.getArea();