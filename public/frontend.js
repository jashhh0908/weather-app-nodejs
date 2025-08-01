 async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const output = document.getElementById("output");

  try {
    const response = await fetch(`/weather?city=${city}`);
    const data = await response.json();

    if (data.error) {
      output.innerText = data.error;
    } else {
      output.innerHTML = `
        <p>Latitude: ${data.latitude} <sup>o</sup></p>
        <p>Longitude: ${data.longitude} <sup>o</sup></p>
        <p>Description: ${data.weather_description} </p>
        <p>Temperature: ${data.temp} <sup>o</sup>C </p>
        <p>Feels like: ${data.feels_like} <sup>o</sup>C </p>
        <p>Pressure: ${data.pressure} atm</p>
        <p>Humidity: ${data.humidity}</p>
        `;
    }
  } catch (err) {
    output.innerText = "An error occurred!";
  }
}