const input = document.querySelector('input');
const btn = document.querySelector('button');
const h1 = document.createElement('h1');
document.body.appendChild(h1);
function cityName() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=copenhagen&appid=7c6a07baac6cfa60315cfdcab55b932f")
        .then(res => res.json())
        .then(res => {
            const response = res;
            console.log(res);
            if (response.name === input.value) {
                h1.innerText = response.name;

                function createElementlist(city) {
                    const li = document.createElement('li');
                    li.innerText = city;
                    return li;

                }
                function appendChildren1(val1, val2) {
                    val2.forEach(function (val) {
                        val1.appendChild(val);
                    })


                }

                function appendChildren(parent, children) {
                    children.forEach(function (child) {
                        parent.appendChild(child);
                    })
                }
                const ul = document.createElement('ul');
                document.body.appendChild(ul);

                console.log(ul);

                const cities = [
                    createElementlist('Weather-icon : ' + response.weather[0].icon),
                    createElementlist('temprature : ' + response.main.temp),

                    createElementlist('Wind speed : ' + response.wind.speed),
                    createElementlist('Clouds: ' + response.clouds.all),

                    createElementlist('sunrise is ' + response.sys.sunrise + 'and sunset is ' + response.sys.sunset),


                ]
                appendChildren(ul, cities);
            }
            else {
                h1.innerText = 'Please enter the correct city';
            }

            function geoFindMe() {

                const status = document.querySelector('#status');
                const mapLink = document.querySelector('#map-link');
              
                mapLink.href = '';
                mapLink.textContent = '';
              
                function success(response) {
                  const latitude  = response.coord.lat;
                  const longitude = response.coord.lon;
              
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
              geoFindMe();
        });
    // google map
    // const mymap = L.map('stylemap').setView([response.coord.lat,response.coord.lon], 13);
    // const attribution= 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    // const tileurl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // const tiles=L.tilelayer(tileurl,{attribution});
    // tiles.addTo(mymap);
   
}
cityName();
btn.addEventListener('click', cityName);

