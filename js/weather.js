const weather = document.getElementById('weather')

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

const asklocation = function () {
    navigator.geolocation.getCurrentPosition(success);
}

asklocation();

const getWeather = (lat, lon) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=945398ff0b04c2064f1579dc198948a0&units=metric&lang=kr`
    ).then((res) => {
        return res.json();
    }).then((json) => {
        weather.innerText = json.weather[0].description;
    })
}