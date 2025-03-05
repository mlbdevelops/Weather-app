

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
    const err = document.getElementById('error');
    const sl = document.getElementById('sl');
    const press = document.getElementById('press');
    const high = document.getElementById('high');
    const low = document.getElementById('low');
    const hour = document.getElementById('hour');
    const fl = document.getElementById('fl');
    const w = document.getElementById('w');
    
    const city = document.getElementById('city-input').value;
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    const response = await fetch(apiUrl);
    
    const data = await response.json();
   
    const weatherContainer = document.getElementById('weather');
    if (data.cod === 200) {
      
      const date = new Date(`${city}`);
      
      hour.textContent = `${data.weather[0].description}`
      
      fl.textContent = `Feels like: ${data.main.feels_like}`
      
      press.textContent = `Pressure: ${data.main.pressure}`;
      sl.textContent = `Sea Level: ${data.main.sea_level}`;
      
      high.textContent = `High: ${data.main.temp_max}`;
      low.textContent = `Low: ${data.main.temp_min}`;
      
      low.style.display = 'block'
      high.style.display = 'block'
      temp.style.display = 'block'
      fl.style.display = 'block'
      press.style.display = 'block'
      sl.style.display = 'block'
      hour.style.display = 'block'
      w.style.opacity = '1'
      
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
      
      err.style.display = 'none';
      
    } else {
      weatherContainer.style.display = 'none';
      err.style.display = 'block';
      txt.style.display = 'none';
    return;
  }
}

document.getElementById('fb').addEventListener("click", function() {
    window.location.href = 'https://www.facebook.com/mlb.loriginal'
})
document.getElementById('insta').addEventListener("click", function() {
  window.location.href = 'https://www.instagram.com/mlb_loriginal/'
})
