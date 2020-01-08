
window.addEventListener('DOMContentLoaded', function () {

    const E = function earthLogger() {
        console.log('Earth');
    }
    const S = function saturmLogger() {
        console.log('satrum');
    }
    function planetLogger(planetLogFunction) {
        planetLogFunction();
    }
    planetLogger(E);
    planetLogger(S);
    setTimeout(() => console.log('the text is loaded after 2.5 seconds'), 2500);


});

// using a function to DOMContentLoaded

function funtionToLoad(delay, stringToLoad) {

    window.addEventListener('DOMContentLoaded', function () {

        const clickButton = document.querySelector('#mybutton');

        clickButton.addEventListener('click', () => setTimeout(() => console.log(stringToLoad), delay * 1000))
    });

}
funtionToLoad(5, 'This is will log and parce in 5 seconds');

// location finder
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
        status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }

}
document.querySelector('#find-me').addEventListener('click', geoFindMe);

// callback function

function runAfterDelay(delay, callback) {
    let count = 0;
    window.addEventListener('click', function () {
        setTimeout(callback, delay * 1000);

        count++;
        console.log(count);
    });
    if (count > 1 && delay < 0.5) {
        console.log('double click exists');
    }
}

runAfterDelay(4, function () {
    console.log('This function will be called after 4 seconds');
});
runAfterDelay(6, function () {
    console.log('This function will be called after 6 seconds');
});
runAfterDelay(10, function () {
    console.log('This function will be called after 10 seconds');
});

// double click occurance

// jock creater
function jokecreater(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    if (shouldTellFunnyJoke) {

        logFunnyJoke();

    }
    else {
        logBadJoke();
    }

}
function logFunnyJoke() {
    console.log('Funny joke');
}
function logBadJoke() {
    console.log('Bad joke');
}
jokecreater(true, logFunnyJoke, logBadJoke);

// Function as a variable
const arrayOfFunctions = [
    function () { console.log('first func of the array') }
    , function () { console.log('second func of the array ') }
    , function () { console.log('third func of the array') }];

for (let i = 0; i < arrayOfFunctions.length; i++) {
    arrayOfFunctions[i]();
}


// calling  a function with con
const myFunction = function () { console.log('constant function') }

myFunction();

// calling normal function
function myFunction2() {
    console.log('this is the second');
}
myFunction2();

// calling a function from an object
obj = {
    myObj: function () {
        console.log('calling a function from an object');
    }
}
obj.myObj();