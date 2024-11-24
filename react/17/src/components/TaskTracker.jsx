import TaskList from "./TaskList";
import { useState } from "react";
import "./TaskTracker.css";

export default function TaskTracker() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const editTask = prompt("Enter a task:");
    if (editTask == "") {
      alert("You input empty string");
    } else if (editTask != null){
      setTasks([...tasks, { text: editTask, completed: false }]);
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const areYouSure = confirm("Are you sure?");
    if (areYouSure) {
      const updatedTasks = tasks.filter((task, i) => i !== index);

      setTasks(updatedTasks);
    }
  };
  const removeAll = () => {
    const areYouSure = confirm("Are you sure?");
    if (areYouSure) {
      setTasks([]);
    }
  };
  return (
    <div className="container tasklist-bg">
      <h1>Task Tracker</h1>
      <TaskList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
      <button className="btn btn-success m-1" onClick={addTask}>
        Add a task
      </button>
      <button className="btn btn-danger m-1" onClick={removeAll}>
        Remove all task
      </button>
    </div>
  );
}
