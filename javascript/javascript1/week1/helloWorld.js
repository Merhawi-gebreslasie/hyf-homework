//Age-ify (A future age calculator)
let yearOfBirth=1987;
let yearFuture=2027;
console.log(typeof yearOfBirth);
console.log(typeof yearFuture);
let age=yearFuture-yearOfBirth;
console.log( 'You will be '+ age + ' years old in '+ yearFuture +'.');





// Goodboy-oldboy(A dog age calculator)
let dogYearOfBirth;
const dogYearFuture=2027;
const dogYear=10;
let shouldShowResultInDogYears;
function dogAge(birth){
 dogYearOfBirth=birth;
 shouldShowResultInDogYears=dogYearFuture-dogYearOfBirth;
 if(shouldShowResultInDogYears===dogYear){
    console.log('Your dog will be ' + 7*dogYear + '  dog years old in '+dogYearFuture+'.');

}else{
    console.log('Your dog will be '+ dogYear +' human years old in ' + dogYearFuture);
}
return shouldShowResultInDogYears;
}
// Testing
console.log(dogAge(2017));





// Housey pricey
let volumeInm2;
let gardenSizem2;
let housePrice;
 function housey(w,h,l,gs){
volumeInm2=w*h*l;
gardenSizem2=gs;
housePrice=volumeInm2*2.5*1000 + gardenSizem2*300;
if(housePrice<2500000){
    if(housePrice<1000000){
        console.log('JUlia paid too much');
    }else{
        console.log('Julia paid too little');
    }
    console.log('Peter paid too much');
  }else{
      console.log('Peter paid too little');
  }

return housePrice;
}
// Testing
console.log(housey(8,10,10,100));





// Startup name
  var firstWords=['tutorsport','mthm','jvs','cshtml','onlinecour','nutraveller','gomore','hyf','github','slack'];
  var secondWrods=['match','solutions','lang','web','smile','jet','intime','coding','share','channel'];
  var randomIndex=Math.floor(Math.random()*10);
  var startUpName=firstWords[randomIndex] + ' '+ secondWrods[randomIndex];
  console.log(startUpName , '   numberOfCharacters= ' +startUpName.length);

  