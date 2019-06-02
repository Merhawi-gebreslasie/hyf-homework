
console.log('event application'.toUpperCase() )
function getEventWeekDay(day){
   
var result=null;
var d = new Date();
var today=d.getDay();
console.log(d);       

var arr=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
if(day%(arr.length)===0)
{
let event1=today;
result=arr[event1];
}
else if(day%(arr.length)===1){
    let event2=(today+1)%arr.length;
    result=arr[event2];
}
else if(day%(arr.length)===2){
    let event3=(today+2)%arr.length;
    result=arr[event3];
}
else if(day%(arr.length)===3){
    let event4=(today+3)%arr.length;
    result=arr[event4];

}
else if(day%(arr.length)===4){
    let event5=(today+4)%arr.length;
    result=arr[event5];

}
else if(day%(arr.length)===5){
     let event6=(today+5)%arr.length;
     result=arr[event6];
}
else if(day%arr.length===6){
    let event7=(today+6)%arr.length;
    result=arr[event7];
}
else{
    result=console.error('put only number,do not use other types!');
}
return result;
}
//Testing
console.log(getEventWeekDay(8));
