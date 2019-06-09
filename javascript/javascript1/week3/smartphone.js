var activities=[];
function addactivity(date,activity,duration){
    activities.push({date:date,
activities:activity,
duration:duration,});
if(activities===[]){
    return "Add some activities before calling showStatus";
}

return activities;
}
function showStutus(){
    
  
    var totalActivities=1;
  var totalDuration=0;
    for(let i=0;i<=activities.length-1;i++){
totalActivities+=i;
totalDuration+=activities[i].duration;
    }
     

        if(totalDuration>160){
        let result='You have reached your limit, no more smartphoning for you!'
        return result;
}
return "You have added " + totalActivities+ ' activities.They amount to '+totalDuration+ 'min. of usage';
    }

addactivity('11/8 19','youtube',50);
addactivity ('11/8 19','facebook',20);
addactivity('11/8 19','news',30);
addactivity('11/8 19','news',100);
console.log(activities);
console.log(showStutus());