const cityInput = document.querySelector("#cityInput");
const cityButton = document.querySelector("#cityButton");
const API_KEY = "b7308101c4347c100efc7c1aa93cfb9c";
let holdWeatherReport = document.querySelector("#holdWeather");
const positionButton = document.querySelector("#userPosition");

const getWeatherReportByCityName = () => {
  holdWeatherReport.innerHTML = "Loading...";
  const cityName = cityInput.value;
  if (cityName) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;

    getWeatherReport(url);
  } else {
    holdWeatherReport.innerHTML = "Enter your city Name";
  }
};

const getWeatherReportByLatAndLong = () => {
  holdWeatherReport.innerHTML = "Loading...";
  const success = (pos) => {
    const { longitude, latitude } = pos.coords;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    getWeatherReport(url);
  };
  navigator.geolocation.getCurrentPosition(success);
};

const getLocationFromLocalStorage = () => {
  let savedLocation = JSON.parse(localStorage.getItem("notes"));

  if (savedLocation) {
    const randomIndex = Math.floor(Math.random() * savedLocation.length);
    const city = savedLocation[randomIndex].name;
    const loadUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    getWeatherReport(loadUrl);
  }
};
const saveToLocalStorage = (name, temp, speed, sunrise, sunset, all, icon) => {
  let localStore = {
    name,
    temp,
    speed,
    sunset,
    sunrise,
    wind: all,
    icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,
  };

  let notesStorage = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  notesStorage.push(localStore);
  localStorage.setItem("notes", JSON.stringify(notesStorage));
};
function getWeatherReport(url) {
  fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        holdWeatherReport.innerHTML = "Not found";

        cityInput.value = "";
      }
    })
    .then((res) => {
      console.log(res);
      const { name } = res;
      const { temp } = res.main;
      const { icon } = res.weather[0];
      const { speed } = res.wind;
      const { all } = res.clouds;
      const { sunrise, sunset } = res.sys;
      //  initMap(lat, lon);
      saveToLocalStorage(name, temp, speed, sunrise, sunset, all, icon);
      holdWeatherReport.innerHTML = `
        <ul>
        <li>The weather in ${name} is ${temp}&#8451</li>
        <li><img src=https://openweathermap.org/img/wn/${icon}@2x.png '></li>
        <li> wind speed ${speed}m/s</li>
        <li>${all}% cloudy</li>
        <li> Sunrise at ${window.moment(sunrise * 1000).format("HH:mm a")} </li>
            <li>Sunset at ${window.moment(sunset * 1000).format("HH:mm a")}</li>
            </ul>
            `;
      cityInput.value = "";
    })
    .catch((err) => console.error("Not found" + err));
}
cityButton.addEventListener("click", getWeatherReportByCityName);
positionButton.addEventListener("click", getWeatherReportByLatAndLong);

document.addEventListener("DOMContentLoaded", getLocationFromLocalStorage);
