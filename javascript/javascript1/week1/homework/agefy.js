const yearOfBirth=1985;
let yearFuture=2025;
const age=yearFuture-yearOfBirth;
let myStr="You will be "+ age + " years old in "+ yearFuture;
console.log(myStr);

//advanced
function ageCalculator(yearFuture,yearOfBirth){
    var age=yearFuture-yearOfBirth;
    console.log("You will be "+ age + ' years old in '+ yearFuture);
}
console.log(ageCalculator(2017,1988));