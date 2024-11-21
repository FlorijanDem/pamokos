export default function Child({ text }) {
  return (
    <ul>
      {text.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
