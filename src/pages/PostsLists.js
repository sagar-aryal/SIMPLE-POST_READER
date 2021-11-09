import React from "react";

const PostsLists = ({ userPosts, currentUserId }) => {
  return (
    <div className="container">
      <div className="right_box">
        {userPosts[currentUserId]?.posts.map((post) => (
          <ul key={post.id}>
            <li>{new Date(post.created_time).toDateString()}</li>
            <li>{post.message}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default PostsLists;
