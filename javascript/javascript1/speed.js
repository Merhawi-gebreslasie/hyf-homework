
  
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
                      

  function velocity(){
var time= (travelInformation.destinationDistance/(travelInformation.speed));
var hours=Math.floor(time);
    var minutes=Math.floor((time-hours)*60);
    var seconds=Math.floor((((time-hours)*60)-minutes)*60);
    return hours+' hours '+' and '+minutes + ' minutes'+'and '+seconds+' seconds';
 
  } 
  const travelTime =   velocity();

  console.log(travelTime); // 4 hours and 42 minutes