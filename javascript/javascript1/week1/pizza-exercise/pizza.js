console.log("I love pizza");
let pizzaName="Mexicana";
let pizzaPrice =100;

console.log("name of the order:"+ pizzaName+"   price is"+pizzaPrice);

//Modification
let amountOfPizza=2;
let familyPizza=true;
    if(familyPizza){
    let totalPrice=2*pizzaPrice*amountOfPizza;
     console.log("amount of pizza:"+amountOfPizza+"   family Pizza"+"    pizza order:"+pizzaName+"     Total price of the pizza is "+totalPrice);
}else{
    let totalPrice=pizzaPrice*amountOfPizza;
    console.log("amount of pizza:"+amountOfPizza+" pizza order:"+pizzaName+" Total price of the pizza is "+totalPrice);
}

//further modification

function pizzaOrder(amountOfPizza,familyPizza,pizzaName){
    if(familyPizza){
    let totalPrice=2*pizzaPrice*amountOfPizza;
    return "amount of pizza:"+amountOfPizza+" family Pizza"+" pizza order:"+pizzaName+" Total price of the pizza is "+totalPrice;
}else{
    let totalPrice=pizzaPrice*amountOfPizza;
    return "amount of pizza:"+amountOfPizza+" pizza order:"+pizzaName+" Total price of the pizza is "+totalPrice;
}
}
console.log(pizzaOrder(3,"family","Margret"));