import { Link } from "react-router";
import { useParams } from "react-router";

export default function ProductDetails() {
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];

  const { id } = useParams();

  const product = products.find((value) => {
    return Number(value.id) === Number(id);
  });

  return (
    <div>
      <h1>{product.name}</h1>
      <Link to="/">Back to Product List</Link>
    </div>
  );
}
