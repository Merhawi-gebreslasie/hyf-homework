console.log("Ez Namey (Startup name generator) Optional");
let firstWords=["math","fix","code","html","js","css","slack","arr","userName","firstName"];
let secondWords=['tutorsporta','mthmtics','jvs','cshtml','onlincor','nutraveller','thegomore','liveforcoding','githubex','slackq']
let randomIndex=Math.floor(Math.random()*10)+0;
let startUpName=firstWords[randomIndex]+" - "+ secondWords[randomIndex];
console.log(startUpName,   "   number of characters="+startUpName.length);

/*The solution looks like this :
Ez Namey (Startup name generator) Optional
namegenerator.js:6 css - nutraveller    number of characters=17*/