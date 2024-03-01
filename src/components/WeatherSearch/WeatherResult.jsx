import React from "react";

const WeatherResult = ({ result }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Weather Result:</h2>
      <p>{result}</p>
    </div>
  );
};

export default WeatherResult;
