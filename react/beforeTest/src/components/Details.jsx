import { useParams } from "react-router";
import { useState, useEffect } from "react";

export default function Details () {
    const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/blood/${id}`);
        const data = await response.json();
        setData(data);
      } catch (err) {
        return <p className="text-danger">{err.message}</p>;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container text-center p-5">
      <p>{"ID: " + data?.id}</p>
      <p>{"First Name: " + data?.firstName}</p>
      <p>{"Last Name: " + data?.lastName}</p>

    </div>)
    
}