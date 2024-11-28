import { useState } from 'react'
import { NavLink, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home'
import Tasks from './components/Tasks'
import Register from './components/Register'
import EditTask from './components/EditTask'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container borde'>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"register"}>Add task</NavLink>
            </li>
            <li>
              <NavLink to={"tasks"}>View all tasks</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={<Home/>}
          />
          <Route
            path='register'
            element={<Register/>}
          />
          <Route
            path='tasks'
            element={<Tasks/>}
          />
          <Route
            path='tasks/:id'
            element={<EditTask/>}
          />
        </Routes>
      </main>
      <footer>2024</footer>
    </div>
  )
}

export default App
