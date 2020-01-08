

// Create an array of bad movies
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(res=>res.json())
.then(res=>{
const badMovies= res.filter(re=>re.rating<4)
console.log( badMovies);
})
    

// Creat an array of bad movies since year 2000
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(res=>res.json())
.then(res=>{
const badMovies= res.filter(re=>re.rating<4&&re.year>2000)
console.log( badMovies);
})

//  Create an array of the titles of the bad movies since year 2000
fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
.then(res=>res.json())
.then(res=>{
const badMovies= res.filter(re=>re.rating<4&&re.year>2000).map(r=>r.title)
console.log( badMovies);
})
