let h, l, w;
let gardenSizeInM2;
//for Peter
l = 10;
h = 10;
w = 8;
let volumeInMeters = h * l * w;
gardenSizeInM2 = 100;
const estimatedPrice=25000000;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice < estimatedPrice) {
  console.log("Peter pays too little:"+housePrice);
} else if (housePrice ===estimatedPrice) {
  console.log("Peter pays as he expects :"+ housePrice);
} else {
  console.log("Peter pays too Much:"+housePrice);
}

//for Julia
let lJ = 11;
let wJ = 5;
let hJ = 8;
let volumeInMetersForJulia = h * l * w;
let gardenSizeInM2ForJulia = 70;
let housePriceForJulia =
  volumeInMetersForJulia * 2.5 * 1000 + gardenSizeInM2ForJulia * 300;
const estimatedPriceForJulia=1000000;
if (housePriceForJulia < estimatedPriceForJulia) {
  console.log("Julia paid too little: "+housePriceForJulia);
} else if (housePriceForJulia === estimatedPriceForJulia) {
  console.log("Julia paid as she expected: "+housePriceForJulia);
} else {
  console.log("julia paid too much: "+housePriceForJulia);
}

//advanced
function pirceEstimater(estimatedPrice, gardenSizeInM2, l, h, w, Name) {
  let volumeInMeters = l * h * w;
  let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
  if (housePrice < estimatedPrice) {
    console.log(Name + " paid too little :only " +housePrice);
  } else if (housePrice === estimatedPrice) {
    console.log(Name + " paid as expected: "+ housePrice);
  } else {
    console.log(Name + "paid too much: "+housePrice);
  }
}
pirceEstimater(2500000, 100, 10, 10, 8, "Peter");
pirceEstimater(1000000, 70, 8, 11, 5, "Julia");
