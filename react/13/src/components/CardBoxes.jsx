import { useState } from "react";
export default function CardBoxes() {
  const [setTask, setClick] = useState(false);

  const [setTaskTwo, setClickTwo] = useState(true);

  return (
    <div className="d-flex">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {setTask ? "Task is done!" : "Task is not done!"}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => setClick(!setTask)}
            type="button"
            className={setTask ? "btn btn-success" : "btn btn-danger"}
          >
            {setTask ? "Done" : "Mark as done"}
          </button>
        </div>
      </div>
      <div className="p-3"></div>

      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {setTaskTwo ? "Task is done!" : "Task is not done!"}
          </h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button
            onClick={() => setClickTwo(!setTaskTwo)}
            type="button"
            className={setTaskTwo ? "btn btn-success" : "btn btn-danger"}
          >
            {setTaskTwo ? "Done" : "Mark as done"}
          </button>
        </div>
      </div>
    </div>
  );
}
