import { Link } from "react-router";
export default function ProductList() {
  const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
  ];

  const listItems = products.map((element, index) => {
    return (
      <ul type="disc" className="item">
        <li key={index}>
          <span>{element.name} </span>
          <Link to={"/product/" + element.id}>View Details</Link>
        </li>
      </ul>
    );
  });
  return <div>{listItems}</div>;
}
