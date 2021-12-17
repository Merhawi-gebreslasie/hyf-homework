let btn = document.querySelector("#btn");
let newbtn = document.querySelector("#newbtn");
let textHolder = document.querySelector("h1");
let textInput = document.querySelector("input");
let mySelect = document.querySelector("#mySelect");
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
function getNewSpritAnimal() {
  let randomIndex = Math.floor(Math.random() * spritAnimals.length);
  let newSpritAnimal = spritAnimals[randomIndex];
  textInput.value
    ? (textHolder.innerHTML = textInput.value + "-" + newSpritAnimal)
    : (textHolder.innerHTML = "Write down your Name in the input field");
}

function renderSpritAnimalNames(selectedButton, events) {
  selectedButton.addEventListener(events, function (event) {
    let option = mySelect.options[mySelect.selectedIndex].text;

    if (selectedButton == textInput && option == "hover text") {
      getNewSpritAnimal();
    }
    if (selectedButton == textInput && option == "write text only") {
      getNewSpritAnimal();
    }

    if (selectedButton == btn) {
      textHolder.innerHTML = textInput.value;
    }
    if (selectedButton == newbtn && option == "click button") {
      getNewSpritAnimal();
    }
  });
}
renderSpritAnimalNames(btn, "click");
renderSpritAnimalNames(newbtn, "click");
renderSpritAnimalNames(textInput, "mouseover");
renderSpritAnimalNames(textInput, "input");
//optional
