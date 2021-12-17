let pWords=['happy', 'awesome', 'super'];
let nWords=['hate','boring','tired'];
function getSentimentScore(str){
    let obj={
        scrore:0,
        positiveWords:[],
        negativeWords:[]
    }
    let parameterString=str.split(' ');
    console.log(parameterString);
for(let i=0;i<parameterString.length;i++){
let word=parameterString[i];
if(pWords.includes(word)){
    obj.scrore++;
    obj.positiveWords.push(word);
} 
if(nWords.includes(word)){
    obj.scrore--;
    obj.negativeWords.push(word);
    return obj;
}
}
}


const sentimentScoreObject = getSentimentScore('I am mega happy awesome super ');

console.log(sentimentScoreObject); 
/*
{
  score: 3,
  positiveWords: ['happy', 'awesome', 'super'],
  negativeWords: [],
}
*/ 
