console.log("Weather wear");
function tempratureInDegrees(temrature){
    if(temrature<12){
        return "You should wear:coat,hat and scarf";
    
    }else if(temrature>=12 && temrature<18){
        return "You should wear:Jacket and Sweater";
    }else{
        return "You have to wear T-shirt and Sun-glass"
    }
}
console.log(tempratureInDegrees(18));