export default function PostContent(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.img} style={{ width: 200 }} alt={props.title} />
      <p>{props.content}</p>
    </div>
  );
}
