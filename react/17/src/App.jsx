import { useState } from 'react'
import './App.css'
import TodoApp from "./components/TodoApp"
import TaskTracker from './components/TaskTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TaskTracker/>
    </>
  )
}

export default App
