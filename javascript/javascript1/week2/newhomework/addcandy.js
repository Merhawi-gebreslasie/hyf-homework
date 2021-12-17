const boughtCandyPrices =[];
function addCandy(CandyType,weight){
if(CandyType=='sweet'){

    boughtCandyPrices.push(weight*0.5);
}
else if(CandyType=='Chocolate'){
  boughtCandyPrices.push(weight*0.7);

}
else if(CandyType=='Chewing-gum'){
   boughtCandyPrices.push(weight*0.03);
}
    else{
    console.log('doe not exist');
    }
console.log(boughtCandyPrices );
}
addCandy('sweet',20);
addCandy('Chocolate',10);
