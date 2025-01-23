import Link from "next/link";
import React from "react";

const home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div>
      <h2>All blogs {posts.length}</h2>
      {posts.map((post) => (
        <Link href={`/blogs/${post.id}`} key={post.id}>
          {" "}
          <li>{post.title}</li>
        </Link>
      ))}
    </div>
  );
};

export default home;
