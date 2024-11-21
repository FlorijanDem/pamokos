export default function IncrementButton(props) {
  return (
    <button onClick={() => props.setCounter((count) => count + 1)}>
      Increment
    </button>
  );
}
