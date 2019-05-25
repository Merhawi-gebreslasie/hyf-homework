//Age-ify (A future age calculator)
let yearOfBirth=1987;
let yearFuture=2027;
console.log(typeof yearOfBirth);
console.log(typeof yearFuture);
let age=yearFuture-yearOfBirth;
console.log( 'You will be '+ age + ' years old in '+ yearFuture +'.');





// Goodboy-oldboy(A dog age calculator)

function dogAge(birth){
    let shouldShowResultInDogYears;
let dogYearOfBirth;
const dogYearFuture=2027;
const dogYear=10;
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


 


// Housey pricey :using  if else if
 function housey(w,h,l,gs){
    let volumeInm3,gardenSizem3,housePrice;  
    volumeInm3=w*h*l;
    gardenSizem3=gs;
    housePrice=volumeInm3*2.5*1000 + gardenSizem3*300;
    if(housePrice<1000000){
    console.log('JUlia paid too much');
    }else if(housePrice<2500000) {
        console.log('peter paid too much');
    }else if(housePrice>1000000){
    console.log('Julia paid too little');
  }else{
    console.log('Peter paid too little');
  }
  return housePrice;
}
// Testing
console.log('PeterHadToPay: '+ housey(80,10,10,100),' JuliaHadToPay: '+ housey(5,11,8,70));






// Startup name
  var firstWords=['tutorsport','mthm','js','html','onlinecourse','traveller','gomore','hyf','github','slack'];
  var secondWrods=['tutorsporta','mthmtics','jvs','cshtml','onlincor','nutraveller','thegomore','liveforcoding','githubex','slackq'];
  var randomIndex=Math.floor(Math.random()*10);
  var startUpName=firstWords[randomIndex] + ' '+ secondWrods[randomIndex];
  console.log(startUpName , '   numberOfCharacters= ' +startUpName.length);

  