const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function speedoMeter(travel) {

  const time = travel.destinationDistance / travel.speed;
  let hour = Math.floor(time);
  let minutes = Math.floor((time - hour) * 60);
  return hour + " hours" + " and " + minutes + " minutes";
 
}
const travelTime = speedoMeter(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
