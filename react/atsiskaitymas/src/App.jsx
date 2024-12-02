import { useState } from "react";
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
    <div className="container p-1">
      <NavBar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/bookform" element={<BookForm />} />
        <Route path="/editbook/:id" element={<EditBook />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
