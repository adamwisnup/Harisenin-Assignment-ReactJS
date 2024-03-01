import React, { useState } from "react";
import WeatherSearchForm from "./components/WeatherSearch/WeatherSearchForm";
import WeatherResult from "./components/WeatherSearch/WeatherResult";
import TaskInput from "./components/TaskManager/TaskInput";
import TaskList from "./components/TaskManager/TaskList";

function App() {
  const [weatherResult, setWeatherResult] = useState(null);
  const [tasks, setTasks] = useState([]);

  return (
    <div className="container mx-auto p-8 mt-10 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Weather Search</h1>
      <WeatherSearchForm setWeatherResult={setWeatherResult} />
      <WeatherResult result={weatherResult} />

      <h1 className="text-2xl font-bold mb-6 mt-8">Task Manager</h1>
      <TaskInput setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
