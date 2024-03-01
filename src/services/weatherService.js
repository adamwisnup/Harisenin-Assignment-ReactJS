import axios from 'axios';

const fetchWeather = (city) => {
  const weatherAPI = `https://api.weatherapi.com/v1/current.json?key=e6853ad8e5df4c17a2d95902221212&q=${city}`;

  return axios.get(weatherAPI)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Network response was not ok (${response.status})`);
      }
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      throw new Error("Error fetching weather data. Please try again.");
    });
};

export default fetchWeather;