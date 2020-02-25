const reservations=require('../data/reservations.json')
module.exports=function(){
    const randomIndex=Math.floor(Math.random()*reservations.length);
    return reservations[randomIndex];
}