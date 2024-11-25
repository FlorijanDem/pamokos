import { useForm } from "react-hook-form"
export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-4 mx-auto">
      <div className="mb-3">
        <label
          htmlFor="name"
          className="form-label"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="type"
          className="form-label"
        >
          Type
        </label>
        <input
          type="text"
          id="type"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="breed"
          className="form-label"
        >
          Breed
        </label>
        <input
          type="text"
          id="breed"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="age"
          className="form-label"
        >
          Age
        </label>
        <input
          type="number"
          id="age"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="weight"
          className="form-label"
        >
          Weight
        </label>
        <input
          type="number"
          id="weight"
          step="0.01"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label
          htmlFor="gender"
          className="form-label"
        >
          Gender
        </label>
        <input
          type="text"
          id="gender"
          className="form-control"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}
