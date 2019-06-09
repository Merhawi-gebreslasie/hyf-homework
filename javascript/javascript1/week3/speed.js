
  
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
                      

  function velocity(){
var time= travelInformation.destinationDistance/(travelInformation.speed);
var hours=Math.floor(time/60);
    var minutes=Math.floor(time%60);
    return hours+' hours '+' and '+minutes + ' minutes';
 
  } 
  const travelTime =   velocity(travelInformation);

  console.log(travelTime); // 4 hours and 42 minutes