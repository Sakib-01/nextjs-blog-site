"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      if (!res.ok) throw new Error("Failed to fetch the blog post");
      const data = await res.json();
      setPost(data);
    };

    if (id) fetchPost();
  }, [id]);

  if (!post) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  // console.log(post);
  return (
    <div className="w-10/12 mx-auto">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">
          <span className="underline">Blog title </span> : {post.title}
        </h1>
        <p> Description: {post.body}</p>
      </div>
    </div>
  );
};

export default SingleBlog;
