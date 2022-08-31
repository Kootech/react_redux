import React, { useEffect, useState } from "react";
import Card from "../components/Card";

import { getPosts } from "../services/api";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function postApi() {
      const posts = await getPosts();
      setPosts(posts.data);
    }
    postApi();
  }, []);
  return (
    <>
      <h1 className="text-5xl">cards</h1>
      <div className="grid grid-cols-4 gap-2">
        {posts.map((post) => {
          return <Card key={post.id} {...post} />;
        })}
      </div>
    </>
  );
};

export default Home;
