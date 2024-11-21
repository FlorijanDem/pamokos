import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Card
      numberOfObject= {0}
      />
      <Card
      numberOfObject= {1}
      />
      <Card
      numberOfObject= {2}
      />
      <Card
      numberOfObject= {3}
      />
      <Card
      numberOfObject= {4}
      />
      <Card
      numberOfObject= {5}
      />
      <Card
      numberOfObject= {6}
      />
      <Card
      numberOfObject= {7}
      />
      <Card
      numberOfObject= {8}
      />
      <Card
      numberOfObject= {9}
      />
    </div>
  );
}

export default App;
