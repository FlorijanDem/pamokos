import TaskList from "scr/components/TaskList";
import { useState } from "react";

export default function TaskTracker(
    
) {
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
}