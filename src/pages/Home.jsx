import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";

import { getPost } from "../features/posts/postSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, isError, isLoading, message } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getPost());
  }, [posts]);
  if (isLoading) return <h1>...Loading</h1>;
  return (
    <>
      {console.log(posts)}
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
