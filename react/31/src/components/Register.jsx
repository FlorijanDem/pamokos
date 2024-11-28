import { useForm } from "react-hook-form";
import { Form } from "react-router";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const responce = await fetch("http://localhost:3001/tasks", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!responce.ok) {
        throw new Error(`Response status: ${responce.status}`);
      }
      alert("All good")
    } catch (error) {
      console.log(error);
    }
  };

  const validateDate = (value) => {
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setFullYear(today.getFullYear() + 1);

    const selectedDate = new Date(value);
    const datenow = new Date();
    if (selectedDate > maxDate) {
      return "Date cannot be more than one year from today";
    }
    if (selectedDate <= datenow ) {
        return "Date cannot be smaller that nowaday"
    }
    return true;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          defaultValue="2024-11-28"
          {...register("date", {
            required: true,
            validate: validateDate,
          })}
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          {...register("task", {
            required: true,
            minLength: 2,
            maxLength: 80,
            pattern: /^[A-Z][a-zA-Z\s]*$/,
          })}
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
    </>
  );
}
