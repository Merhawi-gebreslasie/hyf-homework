console.log("Housey pricey (A house price estimator)");
function houseCalculator(width,deepth,height,gardenSizeInM2){
    let volumeInMeters=width*deepth*height;
    let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if(housePrice<1000000){
    return "Julia and Peter  are paying too little";
    ;
}
else if(housePrice===1000000){
    return "Julia is paying as expected but peter is paying too little";
}
    if(housePrice>1000000 && housePrice<2500000){
    return "Julia is paying too much but Peter is paying too little";
    
}

else if(housePrice===2500000){
return "Peter is paying as expected but Julia is paying too much";
}
else{
    return "Peter and Julia are   paying   too much";
}

}
console.log("Let's see Peter's result    "+houseCalculator(8,10,10,100));
console.log("Let's see Julia's result    "+houseCalculator(5,11,8,70));


/* The solutions looks like this :

house.js:1 Housey pricey (A house price estimator)
house.js:25 Let's see Peter's result    Julia is paying too much but Peter is paying too little
house.js:26 Let's see Julia's result    Julia is paying too much but Peter is paying too little*/