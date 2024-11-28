import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

export default function EditTask() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responce = await fetch(`http://localhost:3001/tasks/${id}`);
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
      const responce = await fetch(`http://localhost:3001/tasks/${id}`, {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("date")} />

      <input {...register("task")} />

      <button type="submit">Submit</button>
    </form>
  );
}
