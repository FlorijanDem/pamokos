

export default function TaskList () {
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
      )
    }