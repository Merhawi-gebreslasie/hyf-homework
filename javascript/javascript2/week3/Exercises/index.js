const firstButton=document.querySelector('#fButton')
const secondButton=document.querySelector('#sButton')
const timeOut=document.querySelector('#log')
let count=0;
const h1=document.querySelector('h1')
let increaseCount=()=>h1.innerHTML=count++;
firstButton.addEventListener('click',increaseCount)
secondButton.addEventListener('click',increaseCount)
let logText=()=>{
    console.log('logs in three seconds');
}
let texloger=() =>setTimeout(logText, 3000);
timeOut.addEventListener('click',texloger);

let loadFunction=()=>console.log("DOM fully loaded and parsed");
document.addEventListener("DOMContentLoaded", loadFunction);

document.addEventListener('mousemove',(event)=>{
   //  console.log(event.pageX,event.pageY);
})
let xPos=[];
let yPos=[];

function findCordiantes(){
    document.addEventListener('mousemove',(event)=>{
        
        xPos.push(event.pageX)
        yPos.push(event.pageY);
        })
        setTimeout(( )=>{
        let xCoordinate=xPos.reduce((acc,pos)=>acc+pos,0);
        let yCoordinate=yPos.reduce((acc,pos)=>acc+pos,0);
        let averageX=xCoordinate/xPos.length;
        let averageY=yCoordinate/yPos.length;
        console.log(averageX,averageY);

    }, 3000);
}             
findCordiantes()