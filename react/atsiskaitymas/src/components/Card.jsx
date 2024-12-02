import { Link } from "react-router";
import { useEffect } from "react";
import { useState } from "react";

export default function Card(props) {
  const [setTask, setClick] = useState(props.reserved);
  const [setEvent, setUpdate] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/books");
        const data = await response.json();
        setData(data);
      } catch (error) {}
    };
    fetchData();
  }, [count]);
  function reserveBook(props) {
    try {
      const updateBook = async () => {
        const response = await fetch(
          `http://localhost:3001/books/${props.id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              reserved: !props.reserved,
              name: props.name,
              author: props.author,
              price: props.price,
              cover: props.cover,
              category: props.category,
            }),
          }
        );
        if (response.ok) {
          setEvent;
        }
      };
      setCount(count + 1);
      updateBook();
    } catch (error) {
      throw new Error(error.message);
    }
  }
  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-2">
      <div>
        <img src={props.cover} alt={props.title} className="img-fluid" />
      </div>
      <p className="fw-normal">{props.title}</p>
      <p className="fw-normal">{props.author}</p>
      <p className="fw-normal">{props.category}</p>
      <p className="fw-normal">{props.price} €</p>
      <button className="btn btn-secondary" onClick={() => reserveBook(props)}>
        {setTask ? "Grąžinti" : "Išduoti skaitytojui"}
      </button>
      <br className="m-3"/>
      <Link className="btn btn-primary" to={"/editbook/" + props.id}>
        Edit
      </Link>
    </div>
  );
}
