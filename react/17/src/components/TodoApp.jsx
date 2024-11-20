import { useState } from "react";

export default function TodoApp() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const editTask = prompt("Enter a task:");
    setTasks([ ...tasks, { text: editTask, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed = !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);

    setTasks(updatedTasks);
  };

  // Spausdiname, kiekviena karta ivykus render - del state pakitimo
  console.log(tasks);
  return (
    <>
    <h1>Task Tracker</h1>
    <h2>{tasks.length == 0 && "No tasks yet!"}</h2>
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span
            style={{ textDecoration: task.completed ? "line-through" : "none" }}
          >
            {task.text}
          </span>
          <button onClick={() => toggleComplete(index)}>Toggle</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}

      <button onClick={() => addTask()}>Add a task</button>
    </ul>
    </>
  );
}
