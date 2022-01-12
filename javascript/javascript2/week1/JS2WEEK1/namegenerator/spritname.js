let nameButton = document.querySelector("#btn");
console.log('HELLO WORLD');
let generateSpritAnimalButton = document.querySelector("#newSpritAnimalbtn");
let textHolder = document.querySelector("#name");
let textInput = document.querySelector("input");
let mySelect=document.querySelector('#mySelect')
let spritAnimals = [
  "huge elephant",
  "butterfly",
  "fox",
  "frog",
  "dolphin",
  "dog",
  "strong alligator",
  "ant",
  "bee",
  "Cheetah",
];
console.log(spritAnimals[0]);
let random=Math.floor(Math.random()*spritAnimals.length)
  const setNameAndSpritAnimal=()=>{
textHolder.innerHTML=textInput.value+'-'+spritAnimals[random]
  }
 

function getNewSpritAnimal() {
  let randomIndex = Math.floor(Math.random() * spritAnimals.length);
  let newSpritAnimal = spritAnimals[randomIndex];
  if(textInput.value){

    (textHolder.innerHTML = textInput.value + "-" + newSpritAnimal)
  }
    else{

      (textHolder.innerHTML = "Write down your Name in the input field");
    }
  }


 
  
  
  
  
  function renderSpritAnimalNames(selectedButton, events) {
    selectedButton.addEventListener(events, function (event) {
      let selectedOption = mySelect.options[mySelect.selectedIndex].value;
      if (selectedButton == nameButton&&selectedOption=='click') {
      setNameAndSpritAnimal()
      }
      if (selectedButton == generateSpritAnimalButton && selectedOption == "click") {
        getNewSpritAnimal();
      }

    if (selectedButton == textInput && (selectedOption == 'mouseover'||selectedOption=='keydown')) {
      getNewSpritAnimal();
    }
   

  });
}
renderSpritAnimalNames(nameButton, "click");
renderSpritAnimalNames(generateSpritAnimalButton, "click");
renderSpritAnimalNames(textInput, "mouseover");
renderSpritAnimalNames(textInput, "input")

  
  //optional 