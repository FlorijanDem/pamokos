import { useState } from 'react'
import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div>
        
      </div>
      <h1>FAR AWAY</h1>

      <form action="">
        <p>What do you need for your trip?</p>
        <input {...register("number")} />
        <input {...register("item")} />
      </form>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
