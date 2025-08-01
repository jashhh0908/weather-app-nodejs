const axios = require('axios');

async function showWeather(req, res){
  const city = req.query.city;
  const api_key = '4c0fe8f4f1ca100b5260c31eec8715df';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  if(!city){
    return res.status(400).json({ error: "City name required"});
  }

  try{
    const response = await axios.get(url);
    const data = response.data;
    const showDetails = {
      latitude: data.coord.lat,
      longitude: data.coord.lon,
      weather_description: data.weather[0].description,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
    }
    res.json(showDetails);
  }
  catch(error){
    res.status(500).json({ error: "Failed to fetch data!"})
  }
};

module.exports = showWeather;