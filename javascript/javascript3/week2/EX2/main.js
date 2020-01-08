
// fetch yes or no from this api: https://yesno.wtf/api. log out the answer
// Get your battery level and if it is charging or not using navigator.getBattery() - use chrome browser
fetch('https://yesno.wtf/api')
    .then(res => res.json())
    .then(res => {
        console.log(res.answer);
    })
const level = navigator.getBattery().then(res => console.log(res.level))
const charging = navigator.getBattery().then(res => console.log(res.charging));


// Create a promise that resolves after 4 seconds. Use this promise to log out the text 'hello' after 4 seconds
// Create a promise that resolves with a string (you decide what the string should say) after 2 seconds.
// Use the promise: When the promise is resolved console.log that string
// Now make the promise fail by rejecting it with an error message instead of resolving it, and log the error message to the console

const firstPromise = new Promise(resolve => {
    setTimeout(() => resolve(), 4000);
})
firstPromise.then(console.log('hello'));


const secondPromise = new Promise(reject =>
    setTimeout(() => {
        reject('some err')
    }
        , 2000));

secondPromise.then(err => console.log(err));


// This exercise could also be a lot more real world. If you have any ideas, please make a PR!
// Create a new function that returns a promise. This function should have one parameter: successMessage. The promise should resolve after 1 second. When you resolve the promise, it should be resolved with the successMessage parameter.
// Call the function with an argument, assign the return of the function to a variable (what type will that have?). Use the variable to log out the successMessage.
// Now add the possibility for the promise to also reject. Give the function a new parameter: errorMessage. When the promise is rejected it should be rejected with the errorMessage parameter. Now reject the promise after 1 second instead of resolving it.
// give the function a third parameter: shouldReject. If shouldReject is true the promise being returned from the function should reject (with the errorMessage parameter) the promise. Otherwise the promise should resolve (with the successMessage parameter)

function creatPromise(successMessage, errorMessage, shouldReject) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldReject) {
                reject(errorMessage);
            }
            else {
                resolve(successMessage);
            }
        }, 1000)
    })
}
const firstCreated = creatPromise('success!!!!', 'ewerqwewer', true).then(result => console.log(result)).catch(err => console.log(err));
console.log(typeof (firstCreated));


//    Get battery level
// After the battery level has been gotten, fetch the movies
// Log out the movies from this api
// Use chaining
navigator
    .getBattery()
    .then(b => b.level)
    .then(level => console.log(level))
    .then(() => fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'))
    .then(res => res.json())
    .then(res => {
        console.log('movies', res);
    })

// Get battery level and the movies at the same time. Log out the movies and the battery status when both promises has been resolved.
const batteryPromise = navigator.getBattery().then(b => b.level)
    .then(level => console.log(level));
const moviePromise = fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(res => res.json())
    .then(res => console.log(res));
Promise.all([batteryPromise, moviePromise]);