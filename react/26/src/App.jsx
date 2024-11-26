import "./App.css";
import Form from "./components/Form";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Success from "./components/Success";
import { useNavigate } from "react-router";

function App() {
  let navigate = useNavigate();

  return (
    <>
    <Routes>
      <Route path="/success" element={<Success/>}/>
      <Route path="/" element={<Form/>}/>

    </Routes>
    </>
  );
}

export default App;
