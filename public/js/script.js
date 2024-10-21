document.getElementById('getWeather').addEventListener('click', async () => {
    const city = document.getElementById('city').value;
    const { data } = await axios.get(`/api/weather?city=${city}`);
    document.getElementById('weatherInfo').innerText = `Weather in ${city}: ${data.weather[0].description}`;
  });
  
  document.getElementById('getCurrencyRate').addEventListener('click', async () => {
    const currency = document.getElementById('currency').value;
    const { data } = await axios.get(`/api/currency?currency=${currency}`);
    document.getElementById('currencyInfo').innerText = `1 USD = ${data.rates[currency]} ${currency}`;
  });
  