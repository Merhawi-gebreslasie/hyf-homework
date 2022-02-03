const movies =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

const fetchData = () => {
  fetch(movies)
    .then((res) => res.json())
    .then((data) => data.filter((movie) => movie.rating < 3))
    .then((badMovies) =>
      badMovies.map((movie) => {
        movie.bad = "bad";
        return movie;
      })
    )
    .then((badMovies) => {
      const filteredBadMovies = badMovies.filter((movie) => movie.year > 2000);
      console.log("bad movies >2000: ", filteredBadMovies);
    });
};
fetchData();

function getResolve(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), resolveAfter * 1000);
  });
}
getResolve(3).then(() => console.log("I am called asynchronously"));

function setTimeoutPromise(timeout) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, timeout);
  });
}

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    const success = (pos) => {
      var crd = pos.coords;

      resolve(
        `Latitude : ${crd.latitude}` +
          `Longitude: ${crd.longitude}` +
          `More or less ${crd.accuracy} meters.`
      );
    };

    const error = (err) => {
      reject(`ERROR(${err.code}): ${err.message}`);
    };
    navigator.geolocation.getCurrentPosition(success, error);
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

//fetching and waiting using Promise

const astronods = "http://api.open-notify.org/astros.json";
function fetchPromise() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(fetch(astronods)), 3000);
  });
}
fetchPromise()
  .then((res) => res.json())
  .then((result) => console.log(result));

//using async/await

async function fetchAsyncAwait() {
  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(fetch(astronods)), 3000);
  });
  const response = await promise;
  const result = await response.json();
  console.log(result);
}
fetchAsyncAwait();
