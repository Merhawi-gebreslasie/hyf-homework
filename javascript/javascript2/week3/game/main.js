
let holdL = document.querySelector("#pL");
let holdS = document.querySelector("#pS");
let h1 = document.createElement("h1");
let input = document.querySelector("#gameInput");
let button = document.querySelector("#gameBtn");
let pressL = document.querySelector(".pressL div");
let pressS = document.querySelector(".pressS div");
const btn = document.createElement("button");
const divForButton=document.querySelector(' section .choose')

const countDownButton=document.createElement('button');
countDownButton.innerHTML='count down'
button.innerHTML='Start game'
btn.innerHTML = "Start a new Game";
pressL.innerHTML = "Press L";
pressS.innerHTML = "Press S";

let countL = 0;
let countS = 0;

const handlePress = (e) => {
    let key = e.key.toLowerCase();
    
    if (key == "s".toLowerCase()) {
        holdS.innerHTML = countS++;
    }
    if (key == "l".toLowerCase()) {
        holdL.innerHTML = countL++;
    }
};

const startNewGame = () => {
    countL = 0;
    countS = 0;

    renderGameOver(input.value)
};
const getWinner = () => {
    if (countL < countS) {
        h1.innerHTML = "S is the winner with a score " + countS;
    }
    if (countL > countS) {
        h1.innerHTML = "L is the winner with a score " + countL;
    }
    
    if (countL == countS) {
        h1.innerHTML = "Draw";
    }
    if (countL == 0 && countS == 0) {
        h1.innerHTML = "No key pressed";
    }
    
    document.body.appendChild(h1);
};

const getOutput = () => {
    document.removeEventListener("keypress", handlePress);
    document.body.appendChild(btn);
    btn.addEventListener("click", startNewGame)
    button.style.display='none'
    getWinner();
};

    
  

function renderGameOver(timeDelay) {
   document.addEventListener("keypress", handlePress);
   
 setTimeout(getOutput,timeDelay* 1000);

}
button.addEventListener('click',()=>renderGameOver(input.value))
