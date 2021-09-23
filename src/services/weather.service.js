export const getWeather = (city) => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=es`)
    .then(res => res.json())
    .then(res => {
      if (res.cod && res.cod !== 200) {
        throw new Error(res.message);
      }

      return res
    })
}

// TODO: Get weather for the next 4 days