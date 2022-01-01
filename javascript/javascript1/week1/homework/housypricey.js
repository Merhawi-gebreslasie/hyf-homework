
//For  Peter

let [height1, length1, width1,gardenSizeInM2]=[10,10,8,100]




let volumeInMeters = height1 * length1 * width1;

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
let [height2, length2, width2,gardenSizeInM2ForJulia]=[11,5,8,70]

let volumeInMetersForJulia = height2 * length2 * width2;
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
function pirceEstimater(estimatedPrice, gardenSizeInM2, length, height, width, Name) {
  let volumeInMeters = length * hight * width;
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
