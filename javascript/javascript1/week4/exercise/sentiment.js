let postWords=['happy', 'awesome', 'super'];
let negtWords=['hate','boring','tired'];
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
if(postWords.includes(word)){
    obj.scrore++;
    obj.positiveWords.push(word);
} 
if(negtWords.includes(word)){
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
