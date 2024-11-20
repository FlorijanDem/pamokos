import {useState} from "react";
import data from "../data/list.json"
import PostContent from "./PostContent";

export default function PostsList() {
  const [posts, setPosts] = useState(data);

  const changeStatus = (id) => {
    const updatedPosts = [...posts];
    
    updatedPosts.forEach((post)=> {
      if (post.id === id) {
        post.status = true;
      }
    });

    setPosts(updatedPosts);
  }

  const postsList = posts.map((post) => {
    return (
      <PostContent
        key={post.id}
        id={post.id}
        title={posts.title}
        content={post.content}
        img={post.img}
        status={post.status}
        setLearnt={changeStatus}
      />
    );
  });
  return <div className="row">{postsList.length ? postsList: "Empty"}</div>;
}
