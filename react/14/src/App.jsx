// import { useState } from "react";
import "./App.css";
import LessText from "./components/LeesText";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <LessText
        texDefault="Focused, hard work is the real key"
        textMore="to success. Keep your eyes on the goal,
and just keep taking the next step
towards completing it."
      />
    </>
  );
}

export default App;
