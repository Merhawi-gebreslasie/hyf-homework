let firstWords=["Easy","Corporate","Awesome","CrazyOne","Say cute",'Wasmist','Independa','Takelbox','Sonetto','MissPure']
let secondWrods=['DoomDis','Tastella','Dimplery','honeyFlame','Brutalla','lovely','Diva','Deenaya','Dearex','Twilixo'];
let startUpName='';
const randomNumber1 = Math.floor(Math.random() * firstWords.length-1);
const randomNumber2 = Math.floor(Math.random() * secondWrods.length-1);
startUpName=firstWords[randomNumber] + secondWrods[randomNumber];
console.log(startUpName+' of length '+startUpName.length);