import Child from "./Child";

export default function Parent() {
  const items = ["React", "JavaScript", "CSS"];

  return (
    <>
      <h1>Items List</h1>
      <Child text={items} />
    </>
  );
}
