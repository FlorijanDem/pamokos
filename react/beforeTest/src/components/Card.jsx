import { Link } from "react-router";
import Details from "./Details";
export default function Card(props) {
  return (
    <div className="col-lg-4">
      <p className="fw-normal">{props.firstName}</p>
      <p className="fw-normal">{props.lastName}</p>
      <p className="fw-normal">{props.age}</p>

      <p>
        <Link className="btn btn-secondary" to={"/details/" + props.id}>
          View Details
        </Link>
      </p>
    </div>
  );
}