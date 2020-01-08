




// set time function
function settingTime(resolveAfter) {
    return new Promise(resolve => {
        setTimeout(() => { resolve(`this will be delayed for ${resolveAfter} seconds`) }, resolveAfter * 1000)
    })
}
settingTime(3).then(result => console.log(result));

// Rewrite time
function getCurrentLocation() {

    return new Promise((resolve, reject) => {

        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            resolve(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
            reject('Unable to retrieve your location');


        });

    });

}
getCurrentLocation()
    .then((position) => {
        // called when the users position is found
        console.log(position);
    })
    .catch((error) => {
        // called if there was an error getting the users location
        console.log(error);
    });
const fetching = new Promise(resolve => {
    fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
        .then(res => res.json())
        .then(res => {
        setTimeout(()=>{resolve(res)},3000)
        })
})
fetching.then(res => {console.log(res)
})