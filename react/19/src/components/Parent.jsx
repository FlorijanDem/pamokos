import { useState } from "react";
import IncrementButton from "./IncrementButton";
import DisplayCounter from "./DisplayCounter";

export default function Parent() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <DisplayCounter number={counter} />
      <IncrementButton setCounter={setCounter} />
    </div>
  );
}
