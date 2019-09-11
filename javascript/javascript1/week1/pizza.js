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

/* The soulutions look like this : 

pizza.js:1 I love pizza
pizza.js:5 name of the order:Mexicana   price is100
pizza.js:12 amount of pizza:2   family Pizza    pizza order:Mexicana     Total price of the pizza is 400
pizza.js:29 amount of pizza:3 family Pizza pizza order:Margret Total price of the pizza is 600

*/