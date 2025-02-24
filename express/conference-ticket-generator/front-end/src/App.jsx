import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Ticket from "./components/Ticket";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import { useNavigate } from "react-router";

function App() {
  const [count, setCount] = useState(0);
  let navigate = useNavigate();

  return (
    <>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </>
  );
}

export default App;
