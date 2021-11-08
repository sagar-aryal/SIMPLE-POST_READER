import React, { useEffect } from "react";
import { getPosts } from "../services/posts";

const Posts = ({ token }) => {
  useEffect(() => {
    const load = async () => {
      const response = await getPosts(token);
      const json = await response.json();
      const incomingPosts = json.data.posts;
      //console.log(incomingPosts);
    };
    load();
  }, [token]);
  return <div></div>;
};

export default Posts;
