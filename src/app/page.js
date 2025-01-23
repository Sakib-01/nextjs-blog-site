import Link from "next/link";
import React from "react";

const home = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="w-10/12 mx-auto">
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Link href={`/blogs/${post.id}`} key={post.id}>
            <li className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              {post.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default home;
