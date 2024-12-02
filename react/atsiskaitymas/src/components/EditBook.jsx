import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

export default function EditBook() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(`http://localhost:3001/books/${id}`);
        const data = await responce.json();

        setData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const responce = await fetch(`http://localhost:3001/books/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!responce.ok) {
        throw new Error(`Responce status: ${responce.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("title", {
            required: true,
            minLength: 3,
            maxLength: 100,
          })}
          placeholder="Title"
        />
        <input
          {...register("author", {
            required: true,
            pattern: /^[A-Z][a-zA-Z\s]*$/,
          })}
          placeholder="Author"
        />
        <input
          {...register("category", { required: true })}
          placeholder="Category"
        />
        {/* <select {...register("gender")}>
              <option value="female">female</option>
              <option value="male">male</option>
              <option value="other">other</option>
            </select> */}
        <input
          {...register("price", { required: true, min: 1 })}
          placeholder="Price"
        />
        <input
          {...register("cover", {
            required: true,
            pattern:
              /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
          })}
          placeholder="Cover"
        />
        <input type="submit" />
      </form>
    </>
  );
}
