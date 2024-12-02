import { Link } from "react-router";

export default function NavBar() {
  return (
    <>
      <Link className="btn btn-secondary" to={"/"}>
        Main Page
      </Link>
      <Link className="btn btn-secondary" to={"/bookform"}>
        Add book
      </Link>
    </>
  );
}
