import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <h1>Welcome to Home Page</h1>
      <Link to="/about">About</Link>
    </>
  );
}
