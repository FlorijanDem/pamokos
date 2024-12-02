import { Link } from "react-router";

export default function Card(props) {
  return (
    <div className="col-3">
      <p className="fw-normal">{props.title}</p>
      <p className="fw-normal">{props.author}</p>
      <p className="fw-normal">{props.category}</p>
      <p className="fw-normal">{props.price}</p>
      <img src={props.cover} alt={props.title} className="img-fluid" />

      <Link className="btn btn-secondary" to={"/editbook/" + props.id}>
        Edit
      </Link>
    </div>
  );
}
