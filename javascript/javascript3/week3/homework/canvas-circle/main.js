 const myCanvas = document.querySelector("#myCanvas");

const ctx = myCanvas.getContext("2d");
ctx.fillStyle = "#0077aa";
ctx.strokeStyle = "#0077aa47";

ctx.beginPath();
const centerX = myCanvas.width / 2;
const centerY = myCanvas.height / 2;
const radius = 40;
ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
ctx.fill();
ctx.stroke();

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    (this.y = y), (this.r = r);
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw() {
    const c = myCanvas.getContext("2d");
    c.fillStyle = this.fillColor;
    c.beginPath();
    c.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    c.fill();
    c.stroke();
  }
}
const c1 = new Circle(60, 70, 20, 0, 2 * Math.PI, "#000000");
const c2 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#34f000");
const c3 = new Circle(30, 10, 10, 0, 2 * Math.PI, "#aa0000");
c1.draw();
c2.draw();
c3.draw();

const r = Math.floor(Math.random() * 50);
const x = Math.floor(Math.random() * randomCircleCanvas.width/2);
const y = Math.floor(Math.random() * randomCircleCanvas.height/2);

  const R=(Math.floor(Math.random() * 255));
  const G=(Math.floor(Math.random() * 255));
  const B=(Math.floor(Math.random() * 255));
  const randColor='rgb(' + R +', ' + G + ',' + B +')';
const context=randomCircleCanvas.getContext('2d')
  context.fillStyle=randColor;

  /*context.fillStyle="green";*/
  context.beginPath()
  context.arc(x, y, r,0,2*Math.PI)
  context.fill()
randomCircleCanvas.width=window.innerWidth;
randomCircleCanvas.height=window.innerHeight;
  