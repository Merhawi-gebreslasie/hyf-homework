console.log("Housey pricey (A house price estimator)");
let width=8;
let height=10;
let depth=10;
let gardenSizeInM2=100;
let volumeInMetersPeter=width*depth*height;
    let housePricePeter = volumeInMetersPeter * 2.5 * 1000 + gardenSizeInM2 * 300;
    if(housePricePeter<2500000){
    console.log( "Peter  is paying too little");
    }else if(housePricePeter===250000){
        console.log( "Peter  is paying as expected");
    }
    else{
        console.log( "Peter  is paying too much");
    }
    width=5;
     height=11;
    depth=8;
    gardenSizeInM2=72;
     volumeInMetersJulia=width*depth*height;
     housePriceJulia= volumeInMetersJulia * 2.5 * 1000 + gardenSizeInM2 * 300;
            if(housePriceJulia<1000000){
            console.log( "Julia  is paying too little");
            }else if(housePriceJulia===1000000){
                console.log( "Julia  is paying as expected");
            }
            else{
                console.log( "Julia  is paying too much");
            }   
