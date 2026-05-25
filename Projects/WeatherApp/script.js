const API_KEY = "d057c78c6c391b9e6452d5f5cc574dd8";

function getWeatherEmoji(main) {
  const map = {
    Thunderstorm: "⛈️",
    Drizzle: "🌦️",
    Rain: "🌧️",
    Snow: "❄️",
    Mist: "🌫️",
    Smoke: "🌫️",
    Haze: "🌫️",
    Dust: "🌪️",
    Fog: "🌫️",
    Sand: "🌪️",
    Ash: "🌋",
    Squall: "🌬️",
    Tornado: "🌪️",
    Clear: "☀️",
    Clouds: "☁️",
  };
  return map[main] || "🌡️";
}

document
  .getElementById("cityName")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      getWeather();
    }
  });

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();
  if (cityName === "") {
    alert("Please Enter City Name");
    return;
  }

  const { Latitude, Longitude } = await getGeoLocation(cityName);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=${API_KEY}`;
  const response = await fetch(WEATHER_API);
  const data = await response.json();

  // console.log(data);

  const temperature = data.main.temp - 273.15;
  const feelsLike = data.main.feels_like - 273.15;
  const maxTemp = data.main.temp_max - 273.15;
  const minTemp = data.main.temp_min - 273.15;
  const humidity = data.main.humidity;
  const pressure = data.main.pressure;
  const windSpeed = data.wind.speed;
  const weather = data.weather[0].main;
  const description = data.weather[0].description;
  const country = data.sys.country;
  const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

  document.getElementById("WeatherEmoji").innerText = getWeatherEmoji(weather);
  document.getElementById("Temperature").innerText =
    `${temperature.toFixed(1)}°`;
  document.getElementById("FeelsLike").innerText = `${feelsLike.toFixed(1)}°C`;
  document.getElementById("Weather").innerText = weather;
  document.getElementById("Description").innerText = description;
  document.getElementById("Humidity").innerText = `${humidity}%`;
  document.getElementById("Pressure").innerText = `${pressure} hPa`;
  document.getElementById("Wind").innerText = `${windSpeed} km/h`;
  document.getElementById("Country").innerText = country;
  document.getElementById("MaxTemp").innerText = `${maxTemp.toFixed(1)}°C`;
  document.getElementById("MinTemp").innerText = `${minTemp.toFixed(1)}°C`;
  document.getElementById("Sunrise").innerText = sunrise;
  document.getElementById("Sunset").innerText = sunset;
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  // console.log(data);

  const Latitude = data[0].lat;
  const Longitude = data[0].lon;
  return { Latitude, Longitude };
}
