import { Link } from "react-router";

export default function NavBar() {
  return (
    <div className="bg-warning my-2 p-2 rounded">
      <Link className="btn btn-secondary" to={"/"}>
        Main Page
      </Link>
      <Link className="btn btn-ligth" to={"/bookform"}>
        Add book
      </Link>
    </div>
  );
}
