import React, { useState, useEffect } from "react";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const updateTask = (index) => {
    const updatedText = prompt("Enter updated task text:", tasks[index].text);
    if (updatedText !== null) {
      const newTasks = [...tasks];
      newTasks[index].text = updatedText.trim();
      setTasks(newTasks);
    }
  };

  const deleteTask = (index) => {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        id="taskInput"
        className="w-full p-2 mb-4 border rounded"
        placeholder="Add new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
      >
        Add Task
      </button>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <span style={{ fontWeight: "bold" }}>{index + 1}. </span>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              className="flex-grow"
            >
              {task.text}
            </span>
            <button
              onClick={() => updateTask(index)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Update
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskInput;
