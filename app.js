const apiKey = "8114320675e3719ec3e0107070be683c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apiKey}&units=metric`;

async function checkWeather(city) {
  const newCity = city === "" ? "delhi" : city;
  const response = await fetch(apiUrl + `&q=${newCity}`);
  if (response.status == 404) {
    alert("Enter correct city name");
  } else {
    var data = await response.json();
    document.querySelector(".city").innerHTML = data?.name;
    document.querySelector(".temp").innerHTML = Math.round(data?.main?.temp) + "°C";
    document.querySelector(".humidity").innerHTML = Math.round(data?.main?.humidity) + "%";
    document.querySelector(".wind").innerHTML = data?.wind?.speed + " km/h";
    const weatherIcon = document.querySelector(".weather-icon");
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Dizzle") {
      weatherIcon.src = "images/dizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }
  }
}

checkWeather("delhi");

const button = document.getElementById("btn");
button.addEventListener("click", () => {
  const city = document.querySelector("#city-weather").value;
  checkWeather(city);
});
