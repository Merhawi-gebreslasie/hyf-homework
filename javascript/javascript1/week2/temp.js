
console.log('Weather Wear'.toUpperCase())

function weatherClothes(temprature){
    let clothes='';
    if(temprature>=-5 && temprature<=10) {
    clothes=('You have to wear Coats,Scarf and Hat ');

    }else if(temprature>10&&temprature<=17){

closthes='You have to wear Jacket and sweater';

    }else if(temprature>17&&temprature<=30){
     clothes='You have to wear T-shirt, short,sunglasses and flip flops ';
    }else{
        
        console.warn('Stay home! else You will be sick');
    }
    return clothes;
}
console.log(weatherClothes(100));