let button=document.querySelector('button')
let locationButton=document.querySelector('#location')
//1  
let loadTimer=()=>setTimeout(() => {
 console.log("Called after 2.5 seconds");   
}, 2500);

document.addEventListener("DOMContentLoaded", loadTimer);

//2
function logStringDelay(delay,stringToLog){
    setTimeout(() => {
     console.log(stringToLog);   
    }, 1000*delay);
}

logStringDelay(6,'This string logged after 6 seconds')
logStringDelay(2,'This string logged after 2 seconds')

//3

let logDelay=()=>logStringDelay(5,'This string logged after 5 seconds')
button.addEventListener('click',logDelay)


//4
const earthLogger=()=>console.log('Earth');
const saturmLogger=()=>console.log('Satrum');
function planetLogFunction(callBack){
    callBack()
}
planetLogFunction(earthLogger);
planetLogFunction(saturmLogger);


//5

  function success(pos) {
    var crd = pos.coords;
  
    console.log(`This is the latitude : ${crd.latitude}`);
    console.log(`This is the longitude: ${crd.longitude}`);
    
  }
  
  
  
locationButton.addEventListener('click',()=>navigator.geolocation.getCurrentPosition(success)
)

  function runAfterDelay(delay,callback){
setTimeout(() => {
    callback()
}, delay*1000);
  }

  runAfterDelay(4,function(){
      console.log('should be logged after 4 seconds');
  })
  runAfterDelay(3,()=> console.log('should be logged after 3 seconds'))
  runAfterDelay(5,()=> console.log('should be logged after 5 seconds'))

  //8
  let doubleClick=0
document.addEventListener('click',()=>{
       doubleClick++
      setTimeout(() => {
        if(doubleClick==2){
            console.log('double Click');
        }
      }, 500);
  })
  
  //9
  function jokeCreator (shouldTellFunnyJoke ,logFunnyJoke ,logBadJoke ){
      if(shouldTellFunnyJoke){
          logFunnyJoke()
      }
      else{
          logBadJoke()
      }

  }
  jokeCreator(false,()=>console.log('This is a Funny joke'),()=>console.log('This is a Bad joke'))

  //functions as variables
  let func1=()=>console.log('This is the first function');
  let func2=()=>console.log('This is the second function');
  let func3=()=>console.log('This is the third function');
  let arrayOfFunctions=[func1,func2,func3];
  arrayOfFunctions.forEach(item=>console.log(item()));


  const constFunction=()=>console.log('Function created as a const');
  function normalFunction() {
      console.log('Function created normally ');
      
  }
constFunction();
normalFunction();


let objFunction={name:()=>console.log('This is a Function in an object')}
objFunction.name();