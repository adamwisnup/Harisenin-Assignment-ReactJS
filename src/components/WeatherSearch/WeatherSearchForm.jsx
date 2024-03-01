import React, { useState } from "react";
import fetchWeather from "../../services/weatherService";

const WeatherSearchForm = () => {
  const [city, setCity] = useState("");
  const [weatherResult, setWeatherResult] = useState(null);

  const searchWeather = () => {
    fetchWeather(city)
      .then((data) => {
        setWeatherResult(data);
      })
      .catch((error) => {
        setWeatherResult(error.message);
      });
  };

  return (
    <div>
      <label htmlFor="city" className="block mb-2">
        City:
      </label>
      <input
        type="text"
        id="city"
        className="w-full p-2 mb-4 border rounded"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        required
      />
      <button
        type="button"
        onClick={searchWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
      >
        Search Weather
      </button>
      <div id="weatherResult" className="mt-4">
        {weatherResult && (
          <>
            <h3>
              {weatherResult.location.name}, {weatherResult.location.region},{" "}
              {weatherResult.location.country}
            </h3>
            <div className="box">
              <img
                src={weatherResult.current.condition.icon}
                alt="Weather Icon"
              />
              <h1>{weatherResult.current.temp_c} ℃</h1>
            </div>
            <p>Last Updated: {weatherResult.current.last_updated}</p>
            <p>Condition: {weatherResult.current.condition.text}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherSearchForm;
