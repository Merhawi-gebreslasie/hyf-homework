console.log("Candy helper optional");
let boughtCandy = [];
function addCandy(candyType, weight) {
    if (candyType === "Sweet") {
        let priceOfSweet = 0.5 * weight;
        boughtCandy.push(priceOfSweet);
        return boughtCandy;
    }
    else if (candyType === "Chocolate") {
        let priceOfChocolate = 0.7 * weight;
        boughtCandy.push(priceOfChocolate);
        return boughtCandy;
    }
    else if (candyType === "Toffee") {
        let priceToffee = 1.1 * weight;
        boughtCandy.push(priceToffee);
        return boughtCandy;
    }
    else if (candyType === "Chewing-gum") {
        let priceOfGum = 0.03 * weight;
        boughtCandy.push(priceOfGum);
        return boughtCandy;
    } else {
        return "check the amount to spend";
    }

}
let amountToSpend = Math.random() * 100;
let sum = 0;
console.log("Random=" + amountToSpend);
function canBuyMoreCandy() {
    let i = 0;
    while (i < boughtCandy.length) {
        sum = sum + boughtCandy[i];
        i++;
    }
    console.log("Total price is " + sum);
    if (sum < amountToSpend) {
        console.log("You can buy more, so please do!");
    } else {
        console.log("Enough candy for you!");
    }
    return false;
}

console.log(addCandy("Sweet", 20));
console.log(addCandy("Chocolate", 10));
console.log(addCandy("Toffee", 15));
console.log(addCandy("Chewing-gum", 25));
console.log(canBuyMoreCandy());