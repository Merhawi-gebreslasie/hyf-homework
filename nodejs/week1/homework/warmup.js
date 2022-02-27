console.log("inside warmup file");

class Circle{

  constructor(radius){
    this.radius=radius;
  }

  getDiameter(){ 
    return 2*this.radius;
  }
  
  getCircumference(){
    return (this.getDiameter()*Math.PI).toFixed(2);
    }
    
  getArea(){
    return   this.getCircumference()*this.radius;
   }
    
  }
    
const circle = new Circle(10);
console.log(circle.getDiameter())
console.log(circle.getCircumference());
console.log(circle.getArea());


