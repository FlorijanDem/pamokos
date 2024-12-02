import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { useNavigate } from "react-router";

export default function BookForm() {
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3001/books", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        throw new Error("Response error!");
      }
      navigate("/");
    } catch (error) {}
  };

//   const { register, handleSubmit } = useForm();
  //   const onSubmit = (data) => console.log(data);
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
