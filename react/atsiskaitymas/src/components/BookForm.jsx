import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
export default function BookForm() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      reserved: false,
    },
  });

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3001/books", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });
      navigate("/");
      if (response.ok) {
        throw new Error("Response error!");
      }
    } catch (error) {}
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="row m-5 p-2">
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
        <br />
        <input type="submit" className="btn btn-success" />
      </form>
    </>
  );
}
