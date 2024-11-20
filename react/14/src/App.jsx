import "./App.css";
import LessText from "./components/LeesText";

function App() {
  return (
    <>
      <LessText
        text="Focused, hard work is the real key to success. Keep your eyes on the goal,
and just keep taking the next step
towards completing it."
        defaultLength={45}
      />
    </>
  );
}

export default App;
