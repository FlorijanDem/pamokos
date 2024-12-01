import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";
export default function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/blood");
        const data = await response.json();
        setData(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="row">
      {data
        .slice() // Create a copy to avoid mutating the original data
        .sort((a, b) => a.lastName.localeCompare(b.lastName)) // Sort by lastName
        .map((user) => {
          return (
            <Card
              key={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              age={user.age}
              id={user.id}
            />
          );
        })}
    </div>
  );
}
