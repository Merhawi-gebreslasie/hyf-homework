let output=[];
function fizzBuzz(a, b) {
  
  for (let i = 1; i <= 100; i++) {
    
    if (i % a == 0 && i % b == 0){
        output.push('FizzBuzz');
    } 
    else if (i % a == 0) {
    output.push('Fizz');
    }
    else if (i % b == 0) {
        output.push('Buzz');
    }
    else{
       output.push(i);
    }
  }
console.log(output);

} 

fizzBuzz(3, 5);

function giveMeFizzBuzzNumber(number,fizzNumber,buzzNumber){


    if(number%fizzNumber==0&&number%buzzNumber==0){
        return 'FizzBuzz';
    }
    if(number%fizzNumber==0){
        return 'Fizz';
    }
    if(number%buzzNumber==0){
        return 'Buzz';
    }
    return number;
}    

let arrResult=[];
for (let i = 0; i <=100; i++) {
let result=giveMeFizzBuzzNumber(i,4,7);
   arrResult.push(result) ;
}
console.log(arrResult);