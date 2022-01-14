const holdL = document.querySelector("#countForL");
const holdS = document.querySelector("#countForS");
const output = document.querySelector("#output");
const input = document.querySelector("#gameInput");
const startButton = document.querySelector("#startBtn");
const pressL = document.querySelector("#pressForL");
const pressS = document.querySelector("#pressForS");
const containerForS=document.querySelector('#containerForS');
const containerForL=document.querySelector('#containerForL');

let sectionPress=document.querySelector('#keyPressSection')

const restartBtnDiv = document.createElement("div");
const restartButton = document.createElement("button");
const restartSection = document.querySelector("#addRestart");
restartBtnDiv.classList.add("restart-button");
restartButton.innerHTML = "Start a new Game";

const startBtnDiv = document.querySelector("#startBtnDiv");
startButton.innerHTML = "Start game";
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

const getWinner = () => {
    if (countL < countS) {
        output.innerHTML =
        "Game over ,S clicked highest  with a  score of  " + (countS - 1);
        
        containerForS.classList.add('animate-S')
        document.body.classList.add("animate");
        containerForL.style.visibility='hidden'
    }
    if (countL > countS) {
        output.innerHTML =
        "Game over ,L clicked highest  with a  score of  " + (countL - 1);
        document.body.classList.add("animate");
        containerForL.classList.add('animate-L')
        containerForS.style.visibility='hidden'

    }
    
    if (countL == countS) {
        output.innerHTML = "Game over,Draw with score of " + (countS - 1);
        document.body.classList.add("animate");

        
    }
    if (countL == 0 && countS == 0) {
        output.innerHTML = "Game over,No key pressed";
        sectionPress.style.visibility='hidden'

    }
};

const getOutput = () => {
    document.removeEventListener("keypress", handlePress);
    restartBtnDiv.appendChild(restartButton);
    restartSection.appendChild(restartBtnDiv);
    startBtnDiv.style.display = "none";

    getWinner();
};

const startNewGame = () => {
  output.innerHTML = "";
  holdL.innerHTML='';
  holdS.innerHTML='';
  countS = 0;
  countL = 0;
  containerForL.classList.remove('animate-L')
  containerForS.classList.remove('animate-S')
  sectionPress.style.visibility='visible'
  containerForL.style.visibility='visible'
  containerForS.style.visibility='visible'
  

  document.body.classList.remove("animate");
  renderGameOver();
};

function renderGameOver() {
    if(input.value){

        document.addEventListener("keypress", handlePress);
      
        setTimeout(getOutput, input.value * 1000);
    }else{
        output.innerHTML='Set your timer'
    }
}
startButton.addEventListener("click", renderGameOver);
restartButton.addEventListener("click", startNewGame);
