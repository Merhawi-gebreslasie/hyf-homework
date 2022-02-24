console.log("inside warmup file");
class Circle{
  constructor(radius){
    this.radius=radius;
  }
  getDiameter(){
   console.log( 'Diameter: '+2*this.radius);
   return 2
  }
  getCircumference(){
    
    console.log('Circumference: '+(2*Math.PI*this.radius).toFixed(2));
  }
  getArea(){
    console.log('Area: '+ (Math.PI*this.radius**2).toFixed(2));

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