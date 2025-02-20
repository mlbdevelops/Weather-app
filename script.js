

const apiKey = "7aa697c4fa5a20f5dd927c3b18bd638a";

async function fetchWeather() {
    const name = document.getElementById('cityName');
    const humidity = document.getElementById('humidity');
    const windsp = document.getElementById('windsp');
    const temp = document.getElementById('temp');
    const cloud = document.getElementById('cloud');
    const rain = document.getElementById('rain');
    const sun = document.getElementById('sun');
    const humi = document.getElementById('humi');
    const speed = document.getElementById('speed');
    const txt = document.getElementById('txt');
    const smog = document.getElementById('smog');
    
    const city = document.getElementById('city-input').value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherContainer = document.getElementById('weather');
    if (data.cod === 200) {
      
      speed.style.display = 'block';
      humi.style.display = 'block';
      
      weatherContainer.style.display = 'block';
      
      txt.style.display = 'none';
      name.textContent = ` ${data.name}`;
      name.style.display = 'block';
      
      temp.textContent = Math.round(data.main.temp)+"°C";
      temp.style.display = 'block';
      
      humidity.textContent = `${data.main.humidity}%`;
      humidity.style.display= 'block';
      
      windsp.textContent = `${data.wind.speed} Km/h`;
      windsp.style.display = 'block';
      
      if (data.weather[0].main == "Clouds") {
        cloud.style.display = 'block';
        rain.style.display = 'none';
        sun.style.display = 'none';
        smog.style.display = 'none';
      }
      
      if (data.weather[0].main == "Clear") {
        sun.style.display = 'block';
        cloud.style.display = 'none';
        rain.style.display = 'none';
        smog.style.display = 'none';
      }
      
      if (data.weather[0].main == "Rain") {
        rain.style.display = 'block';
        cloud.style.display = 'none';
        sun.style.display = 'none';
        smog.style.display = 'none';
      }
      
      if (data.weather[0].main == "Fog") {
        smog.style.display = 'block';
        cloud.style.display = 'none';
        sun.style.display = 'none';
        rain.style.display = 'none';
      }
      
      
    } else {
    weatherContainer.innerHTML = `<p>Weather data not available. Please try another city.</p>`;
  }
}


document.getElementById('fb').addEventListener("click", function() {
    window.location.href = 'https://facebook.com/mlb_loriginal'
})
document.getElementById('insta').addEventListener("click", function() {
  window.location.href = 'https://www.instagram.com/mlb_loriginal/'
})
