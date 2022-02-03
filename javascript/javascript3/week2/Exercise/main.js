//Exercise 1 using async/await
console.log("yes or no");
async function asyncAwaitExercise() {
  try {
    const yesOrNoData = await fetch("https://yesno.wtf/api");
    const result = await yesOrNoData.json();
    console.log("Exercise 1");
    console.log(result.answer);
  } catch (err) {
    console.log(err);
  }
}
asyncAwaitExercise();

//Exercise 2:1 using Promise

function promiseExercise() {
  return new Promise((resolve, reject) => {
    const fetchData = fetch("https://yesno.wtf/api")
      .then((res) => res.json())
      .then((res) => {
        if (res.answer) {
          resolve(res.answer);
        } else {
          reject("fetching went wrong or does not exist");
        }
      });
  });
}
promiseExercise()
  .then((result) => {
    console.log("Exercise 2 using promise");
    console.log(result);
  })
  .catch((err) => {
    console.log("Exercise 2 using promise");
    console.log(err);
  });
//Exercise 2:1 using Promise
let word = "hello";
console.log("log after 4 seconds");

let resolvePromise = new Promise((resolve) =>
  setTimeout(() => resolve(word), 4000)
);

resolvePromise.then((result) => console.log(result));

//Exersice 2:2
const rejectPromise = new Promise((resolve, reject) => {
  if (!word) {
    setTimeout(() => reject("Put the right word"), 4000);
  }
});
rejectPromise.catch((err) => console.log(err));

//Exersice 3

const yesNoArray = ["yes", "no", "both"];
function yesNoFunction() {
  const random = yesNoArray[Math.floor(Math.random() * yesNoArray.length)];
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (random == "yes" || random == "no") {
        resolve(random);
      } else {
        reject("Does not exist");
      }
    }, 4000);
  });
}
yesNoFunction()
  .then((result) => console.log("Exersise 3: ", result))
  .catch((err) => console.log("Exersice 3: ", err));
// Exersice 5
async function asyncFunction() {
  
  try {
    const astronodRespose = await fetch("http://api.open-notify.org/astros.json");
    const movieResponse = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );

    const astrondResult = await astronodRespose.json();

    const movieResult = await movies.json();
    console.log(movieResult);
  } catch (err) {
    console.log(err);
  }
}
asyncFunction();
async function getAtTheSameTime() {
  try{

    const astrondResponse = await fetch("http://api.open-notify.org/astros.json");
    const movieResponse = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movieResult = await movieResponse.json()
    const astrondResult=await astrondResponse.json();
    const result = await Promise.all([astrondResult, movieResult])
    console.log("at the same time");
    console.log(result[0].people.map(person=>person.name),result[1]);

    
  }catch(err){
    console.log(err);
  }
  
}

getAtTheSameTime();


async function getBatteryStatus(){
  const batteryStatus = await navigator.getBattery();
  console.log(batteryStatus);
  const batteryCharging=()=>console.log(batteryStatus.charging||null);
  const batteryChargingTime=()=>console.log(batteryStatus.chargingtime||null);
  const batteryDisChargingtime=()=>console.log(batteryStatus.dischargingtime||null);
  const batteryLevel=()=>console.log(batteryStatus.level);

  const result=await Promise.all([batteryCharging(),batteryChargingTime(),batteryDisChargingtime(),batteryLevel()])
result.forEach(item=>console.log(item))
};
getBatteryStatus()