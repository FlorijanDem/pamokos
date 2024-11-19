export default function PostImage(props) {
  console.log(props)
  return (
    <div>
      <img
        src={props.src}
        alt={props.alt}
        className={props.bsClasses}
        // className="header-img w-100 object-fit-cover rounded-pill border border-3"
      />
    </div>
  );
}
