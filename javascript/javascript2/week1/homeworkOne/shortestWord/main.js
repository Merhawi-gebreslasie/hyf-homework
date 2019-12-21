const body = document.querySelector('body');


function findShortestWord(words) {
    var shortest = words[0];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortest.length) {
            shortest = words[i];
        }
    }
    const h1 = document.createElement('h3');
    h1.innerHTML = 'shortest danish word is ' + shortest;
    body.appendChild(h1);

}
findShortestWord(['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium']);