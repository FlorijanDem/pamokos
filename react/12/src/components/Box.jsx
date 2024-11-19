export default function Box(props) {
  return (
    <div className={props.type}>
      <img
        src={props.src}
        alt={props.alt}
        className="header-img w-100 object-fit-cover"
      />
    </div>
  );
}
