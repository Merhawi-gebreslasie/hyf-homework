const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
let result='';
function shortestDanishWord(danishWords){

    for(let i=0;i<danishWords.length;i++){
       let shortestWord=danishWords[0];
        let danWord=danishWords[i];
        if(shortestWord.length>danWord.length){
           shortestWord=danWord;
        result=   'shortest danish word is '+ shortestWord;
        } 
    }
    console.log(result);
} // returns 'ø'
shortestDanishWord(danishWords);
