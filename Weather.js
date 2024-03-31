async function fetchWeatherCity(cityName) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=2acbac7c6cedabb2fc01a529b86ede80';
    const response = await fetch(url);
    const data = await response.json();
    let city = document.getElementById("city");
    city.innerHTML = data.name;
    let windSpeed = document.getElementById("wind_speed");
    windSpeed.innerHTML = data.wind.speed + " km/hr";
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = data.main.humidity + " g/kg";
    let temp = document.getElementById("temp");
    temp.innerHTML = Math.round((data.main.temp) - 273.15) + "°C";
    console.log(data);
}

function fetchCity() {
    let cityName = document.getElementById("cityname").value;
    if (cityName === "") {
        alert("Enter a city name");
    } else {
        fetchWeatherCity(cityName);
        document.getElementById("cityname").value = "";
    }
}
