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
      <LessText
        text="The etymology of the various words for tea reflects the history of transmission of tea drinking culture and trade from China to countries around the world."
        defaultLength={43}
      />
    </>
  );
}

export default App;
