import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './components/Main'
import Form from './components/Form'
import List from './components/List'
import Details from "./components/Details"
import { Router, Routes } from 'react-router'
import { Route } from 'react-router'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
