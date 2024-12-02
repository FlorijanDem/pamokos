import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router";
import MainPage from "./components/MainPage";
import BookForm from "./components/BookForm";
import EditBook from "./components/EditBook";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookform" element={<BookForm />} />
        <Route path="/editbook/:id" element={<EditBook />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
