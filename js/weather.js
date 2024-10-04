const weatherId = document.getElementById('weather')

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
        weatherImage("Rain")
    })
}

const weatherImage = function (weather) {
    const weatherList = [
        "Clouds",
        "Rain",
        "Snow",
        "Thunderstorm"
    ];
    weather = weatherList.includes(weather) ? weather : "Clear";
    document.getElementById('weathericon').src=`./img/${weather}.png`
}