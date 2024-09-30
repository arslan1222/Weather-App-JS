const apiKey = "5259da5ee4ad71d4c2a5f61a0b73964a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searcBox = document.querySelector(".search-bar input");
const searcBtn = document.querySelector(".search-bar button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {

      var data = await response.json();

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML =
    data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "./assets/clouds.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "./assets/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "./assets/drizzle.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "./assets/suny.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "./assets/mist";
  }

  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";

      
  }
}

searcBtn.addEventListener("click", () => {
  checkWeather(searcBox.value);
});