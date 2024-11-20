import PostContent from "./PostContent";
import { v4 as uuidv4 } from "uuid";

export default function PostsList() {
  const posts = [
    {
      title: "Apple",
      content: "A fruit growing in a tree",
      img: "https://cdn.britannica.com/22/187222-050-07B17FB6/apples-on-a-tree-branch.jpg",
    },
    {
      title: "Pear",
      content: "So tasty and juisy fruit",
      img: "https://www.starkbros.ca/wp-content/uploads/2021/09/Pear_Bartlett.webp",
    },
    {
      title: "Potato",
      content: "A vegetable growing in underground",
      img: "https://cdn.britannica.com/08/194708-050-56FF816A/potatoes.jpg",
    },
  ];
  const list = posts.map((post) => {
    return (
      <PostContent
        key={uuidv4()}
        title={posts.title}
        content={post.content}
        img={post.img}
      />
    );
  });
  return <div>{list}</div>;
}
