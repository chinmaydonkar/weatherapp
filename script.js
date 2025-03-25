const API_KEY = "504d7face6433ca80fe4ce5c9e43b1e9";

      async function getWeather() {
        const city = document.getElementById("cityInput").value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        try {
          const response = await fetch(url);
          const data = await response.json();

          document.getElementById("cityName").textContent = data.name;
          document.getElementById("temperature").textContent = `${Math.round(
            data.main.temp
          )}°C`;
          document.getElementById("description").textContent =
            data.weather[0].description;
          document.getElementById(
            "humidity"
          ).textContent = `${data.main.humidity}%`;
          document.getElementById(
            "windSpeed"
          ).textContent = `${data.wind.speed} m/s`;
          document.getElementById("feelsLike").textContent = `${Math.round(
            data.main.feels_like
          )}°C`;

          const iconCode = data.weather[0].icon;
          document.getElementById(
            "weatherIcon"
          ).src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        } catch (error) {
          console.error("Error fetching weather data:", error);
          alert("Could not fetch weather data. Please try again.");
        }
      }