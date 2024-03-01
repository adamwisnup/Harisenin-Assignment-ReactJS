import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <ul id="taskList" className="mt-4">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
};

export default TaskList;
