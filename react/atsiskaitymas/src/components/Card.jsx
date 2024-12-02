import { Link } from "react-router";
import { useEffect } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Card(props) {
  let reseration = "";
  if (props.reserved == false) {
    reseration = "Išduoti skaitytojui";
  } else {
    reseration = "Grąžinti";
  }
//   const id = props.id
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { register, handleSubmit } = useForm();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const responce = await fetch(`http://localhost:3001/books/${id}`);
//         const data = await responce.json();

//         setData(data, props.title);
//         setLoading(false);
//       } catch (error) {
//         console.log(error.message);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const onSubmit = async (data) => {
//     try {
//       const responce = await fetch(`http://localhost:3001/books/${id}`, {
//         method: "PUT",
//         body: JSON.stringify(data, props.title),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });

//       if (!responce.ok) {
//         throw new Error(`Responce status: ${responce.status}`);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-2">
      <div>
        <img src={props.cover} alt={props.title} className="img-fluid" />
      </div>
      <p className="fw-normal">{props.title}</p>
      <p className="fw-normal">{props.author}</p>
      <p className="fw-normal">{props.category}</p>
      <p className="fw-normal">{props.price}</p>
      {/* <button className="btn btn-secondary">
        {reseration}
      </button> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
      </form> */}
      <button type="submit" className="btn btn-secondary">{reseration}</button>
      <Link className="btn btn-primary" to={"/editbook/" + props.id}>
        Edit
      </Link>
    </div>
  );
}
