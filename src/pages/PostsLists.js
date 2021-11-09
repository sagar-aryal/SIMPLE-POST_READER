import React, { useEffect, useState } from "react";

const PostsLists = ({ userPosts, currentUserId }) => {
  const [searchPosts, setSearchPosts] = useState("");
  const [outputPosts, setOutputPosts] = useState([]);

  const searchHandler = (event) => {
    setSearchPosts(event.target.value);
    //console.log(event.target.value);
  };

  useEffect(() => {
    setOutputPosts(
      userPosts[currentUserId]?.posts.filter((post) =>
        post.message
          .toLocaleLowerCase()
          .includes(searchPosts.toLocaleLowerCase())
      )
    );
  }, [searchPosts, currentUserId, userPosts]);

  return (
    <div className="container">
      <div className="right_box">
        <div className="top_bar">
          <div>
            <button>
              <i className="fa fa-toggle-up"></i>
            </button>
            <button>
              <i className="fa fa-toggle-down"></i>
            </button>
          </div>
          <input
            type="text"
            placeholder="Search Posts..."
            onChange={searchHandler}
          />
        </div>
        <div className="posts_lists">
          {outputPosts.map((post) => (
            <ul key={post.id}>
              <li>{new Date(post.created_time).toDateString()}</li>
              <li>{post.message}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsLists;
