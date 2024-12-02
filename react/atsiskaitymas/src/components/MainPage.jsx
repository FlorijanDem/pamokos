import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

export default function MainPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/books");
        const data = await response.json();
        setData(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div className="row">
      {data.map((user) => {
        return (
          <Card
            key={user.id}
            title={user.title}
            author={user.author}
            category={user.category}
            price={user.price}
            cover={user.cover}
            id={user.id}
          />
        );
      })}
    </div>
  );
}
