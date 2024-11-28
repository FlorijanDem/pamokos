import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Tasks () {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteTrigger, setDeleteTrigger] = useState(0);

    useEffect (() =>{
        const fetchData = async () => {
            try {
                const responce = await fetch("http://localhost:3001/tasks");
                const data = await responce.json();

                setData(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false)
            }
        }; 
        fetchData()
    }, [deleteTrigger]);

    const deleteTask = async (id) => {
        try {
            const responce = await fetch (`http://localhost:3001/tasks/${id}`, {
                method: "DELETE",
            });
            if (!responce.ok) {
                throw new Error(`Responce status: ${responce.status}`);
            }
            setDeleteTrigger((deleteTrigger) => deleteTrigger + 1);
        } catch (error) {
            console.error(error)
        }
    };

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Task</th>
                </tr>
            </thead>

            <tbody>
                {data.map((todo, index) => {
                    return (
                        <tr key={todo.id}>
                            <td>{todo.date}</td>
                            <td>{todo.task}</td>
                            <td>
                                <Link to={`/tasks/${todo.id}`}>Edit</Link>
                            </td>
                            <td>
                                <button onClick={() => deleteTask(todo.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}