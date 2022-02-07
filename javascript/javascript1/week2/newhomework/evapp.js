const d=new Date();
const day=d.getDay();
/*console.log(d.getDay());

var options = { weekday: 'long'};
console.log(new Intl.DateTimeFormat('en-US', options).format(day));
*/
const weekdays=['Sunday' ,'Monday','Tuesday','Wednesday','Thusday','Friday','Saturday'];
function getEventWeekday(event){
    let a=(event+day)%weekdays.length;
    console.log('the day is '+ weekdays[a]);
}
getEventWeekday(9)
getEventWeekday(1)
