const axios = require('axios');

exports.getWeather = async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${process.env.WEATHER_API_KEY}`);
    res.json(data);
  } catch (error) {
    res.status(500).send('Failed to fetch weather data');
  }
};

exports.getCurrencyRate = async (req, res) => {
  try {
    const { data } = await axios.get(`https://api.exchangerate-api.com/v4/latest/${req.query.currency}`);
    res.json(data);
  } catch (error) {
    res.status(500).send('Failed to fetch currency data');
  }
};
