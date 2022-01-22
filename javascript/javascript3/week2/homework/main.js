const movies =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

const fetchData = () => {
  fetch(movies)
    .then((res) => res.json())
    .then((data) => {
      const badMovies = data
        .filter((movie) => movie.rating < 3)
        .map((movie) => {
          movie.bad = "bad";
          return movie;
        });
      console.log("bad movies: ", badMovies);
      const filteredBadMovies = badMovies.filter((movie) => movie.year > 2000);
      console.log("bad movies >2000: ", filteredBadMovies);
    });
};
fetchData();

async function getResolve(resolveAfter) {
  return await new Promise((resolve) => {
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
  return new Promise((resolve, reject) => {
    fetch(astronods)
      .then((astronod) => astronod.json())
      .then((astronod) => {
        if (astronod) {
          setTimeout(() => resolve(astronod), 3000);
        } else {
          setTimeout(() => reject("fetching astronods goes wrong"), 3000);
        }
      });
  });
}
fetchPromise()
  .then((result) => {
    console.log("fecthing sing promise and .then");
    console.log(result);
  })
  .catch((err) => console.log(err));

//using async/await
async function fetchUsingAsyncAwait() {
  try {
    const listAstronods = await fetch(astronods);
    const astronodResult = await listAstronods.json();
    setTimeout(
      () => console.log("fetching using async/await: ", astronodResult),
      3000
    );
  } catch (err) {
    setTimeout(() => console.log(err), 3000);
  }
}
fetchUsingAsyncAwait();
