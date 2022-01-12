let h1 =document.createElement('h1');
let body=document.querySelector('body')
let danishLetters = "æøå";

function countLetters(str) {

  let result = { total: 0 };

  for (let i = 0; i < str.length; i++) {

    let letterOnString = str.charAt(i);

    if (danishLetters.includes(letterOnString)) {
      result.total++;
      if (result[letterOnString]) {
        result[letterOnString]++;
      } else {
        result[letterOnString] = 1;
      }
    }
  }
  h1.innerHTML=result;
  body.appendChild(h1)
   console.log(result);
}

const danishString = "Jeg har en blå bil";
countLetters(danishString); // returns {total: 1, å: 1}
const danishString2 = "Blå grød med røde bær";
countLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
