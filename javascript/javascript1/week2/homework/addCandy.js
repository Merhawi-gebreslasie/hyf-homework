const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  if (candyType == "sweet") {
    boughtCandyPrices.push(weight * 0.5);
  } else if (candyType == "Chocolate") {
    boughtCandyPrices.push(weight * 0.7);
  } else if (candyType == "Chewing-gum") {
    boughtCandyPrices.push(weight * 0.03);
  } else {
    console.log("does not exist in this list");
  }
  console.log("Candy prices : " + boughtCandyPrices);
}
addCandy("sweet", 20);
addCandy("Chocolate", 10);
