console.log("Event application");
function getEVentWeekDay(day){
let d=new Date();
let today=d.getDay();
let arrDays=["Sunday","Monday","Tuesday","Thursday","Friday","Saturday"];
let event=(today+day)%arrDays.length;
return arrDays[event];
}
console.log(getEVentWeekDay(11));