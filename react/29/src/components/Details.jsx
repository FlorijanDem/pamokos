import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Details(props) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setData(data);
        setLoading(false);
        console.log(data)
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div className="container">
      <h1>Product ID: {data?.id}</h1>
      <h2>Name: {data?.name}</h2>
      <h2>Company: {data.company}</h2>
      <h2>
        Location: {data.address} 
      </h2>

      <Link className="btn btn-secondary" to="/">
        home
      </Link>
    </div>
  );
}
