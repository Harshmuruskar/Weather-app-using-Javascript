async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "cb65411425279bef10000ea6bf6353a5"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}, ${data.sys.country}</h3>
      <p>🌡 Temperature: ${Math.round(data.main.temp)} °C</p>
      <p>🌤 Weather: ${data.weather[0].description}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}
