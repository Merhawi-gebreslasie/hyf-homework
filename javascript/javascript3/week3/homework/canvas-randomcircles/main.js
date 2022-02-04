const randomCircleCanvas = document.getElementById("randomCircleCanvas");
randomCircleCanvas.width = window.innerWidth;
randomCircleCanvas.height = window.innerHeight;



/*context.fillStyle="green";*/

class MyCircle{
    constructor(x, y, r, start, end, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.start = start;
        this.end = end;
        this.color = color;
    }
    draw() {
        const context = randomCircleCanvas.getContext("2d");
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, this.start, this.end);
        context.fill();
    }
}




function randomCircle(){
    
    const inter=setInterval(() => {
        const R = Math.floor(Math.random() * 255);
        const G = Math.floor(Math.random() * 255);
        const B = Math.floor(Math.random() * 255);
        
        const randColor = "rgb(" + R + ", " + G + "," + B + ")";
        
        
        const r = Math.floor(Math.random() * 50);
            const centerX = Math.floor((Math.random() * randomCircleCanvas.width));
            const centerY = Math.floor((Math.random() * randomCircleCanvas.height));
            
            const circle=new MyCircle(centerX,centerY,r,0,2*Math.PI,randColor)
            
            circle.draw();
        }, 100);
        setTimeout(() => {
            clearInterval(inter)  
        }, 20000);
    }
    randomCircle()
    const mouseOption=(e)=>{
        const R = Math.floor(Math.random() * 255);
        const G = Math.floor(Math.random() * 255);
        const B = Math.floor(Math.random() * 255);
        
        const randColor = "rgb(" + R + ", " + G + "," + B + ")";
        const r = Math.floor(Math.random() * 50);

    const yPos=e.clientY;
    const xPos=e.clientX;
    const c=new MyCircle(xPos,yPos,r,0,2*Math.PI,randColor)
    c.draw()  
    
}

document.addEventListener('mousemove',mouseOption)