console.log('Candy helper'.toUpperCase());
var boughtCandyPrice=[];
let price=0;
function addCandy(Candytype,weight){
if((Candytype==='sweet')){
    price=weight*0.5;
    boughtCandyPrice.push(price);
}else if(Candytype==='Chocolate'){
    price=weight*0.7;
    boughtCandyPrice.push(price);
}else if(Candytype==='Toffee'){
    price=weight*1.1;
    boughtCandyPrice.push(price);
}else if(Candytype==='Chewing gum'){
    price=weight*0.03;
    boughtCandyPrice.push(price);
}


else{
    price='weight and see';
}

console.log(boughtCandyPrice);
return price;     
}

console.log('CAN I BUY MORE');
var amountToSpend=Math.random()*100;
var sum;
function canBuyMoreCandy(){
    addCandy();
    for(let i=0;i<=boughtCandyPrice.length-1;i++){
        
        sum+=boughtCandyPrice[i];
    
    }if(sum< amountToSpend){
        return true;
    }else{
        console.log('you have got enough');
    }
    console.log(sum);
return false;
}
console.log(addCandy('sweet',30));
console.log(addCandy('Chocolate',20));
console.log(addCandy('Toffee',35));
console.log(addCandy('Chewing gum',100));
console.log(canBuyMoreCandy());