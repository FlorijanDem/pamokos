import { useForm } from "react-hook-form";

export default function Form() {
//   let navigate = useNavigate();

  const onSubmit = async (values) => {
    try {
      const response = await fetch("http://localhost:3000/blood", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json",
        },
      });

    //   if (response.ok) {
    //     navigate("/");
    //   }
    } catch (error) {}
  };

  const { register, handleSubmit } = useForm();
  //   const onSubmit = (data) => console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First name" />
        <input {...register("lastName")} placeholder="Last name" />
        <input {...register("age")} placeholder="Age" />
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input {...register("bloodGroup")} placeholder="Blood group" />
        <input type="submit" />
      </form>
    </>
  );
}
