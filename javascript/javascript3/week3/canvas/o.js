// Class creation time!
const myCanvas = document.getElementById('newCanvas');
const contex = myCanvas.getContext('2d');
var window_width = window.innerWidth;
var window_height = window.innerHeight;
myCanvas.width = window_width;
myCanvas.height = window_height;
class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw(contex) {

        contex.beginPath();
        contex.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        contex.fillStyle = this.fillColor;
        contex.fill();
        contex.strokeStyle = '#FF0000';
        contex.stroke();
    }



}
// }
// const c1 = new Circle(150, 150, 20, 0, 2 * Math.PI, '#0000ff');
// const c2 = new Circle(80, 80, 20, 0, 2 * Math.PI, '#0000ff');

// c1.draw(contex);
// c2.draw(contex);
const circles = [];

let randomCircles = function (circle) {
    circle.draw(contex);
}
for (let i = 0; i < 15; i++) {
    let r, g, b, fillColor;
    r = Math.floor(Math.random() * 16).toString(16)
    g = Math.floor(Math.random() * 16).toString(16)
    b = Math.floor(Math.random() * 16).toString(16)
    fillColor = `#${r}${g}${b}`;

    const randomX = Math.random() * window_width;
    const randomY = Math.random() * window_height;
    const newCircle = new Circle(randomX, randomY, 60, 0, 2 * Math.PI, fillColor);
    circles.push(newCircle);
    randomCircles(circles[i]);
}
