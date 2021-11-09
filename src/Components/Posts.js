import { useEffect, useState } from "react";
import PostsLists from "../pages/PostsLists";
import UsersList from "../pages/UsersList";
import { getPosts } from "../services/posts";
/* import { Router, Route } from "react-router-dom"; */

const Posts = ({ token }) => {
  const [status, setStatus] = useState("idle");
  const [users, setUsers] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [currentUserId, setCurrentUserId] = useState("user_0");
  const changeCurrentUserId = (userId) => () => setCurrentUserId(userId);

  useEffect(() => {
    const run = async () => {
      setStatus("pending");
      const response = await getPosts(token);
      const json = await response.json();
      const incomingPosts = json.data.posts;

      /** This function groups posts of users by user id */
      const groupedPosts = incomingPosts.reduce((acc, cur) => {
        const { from_id, from_name, ...post } = cur;
        const previousPosts = acc[cur.from_id]?.posts || [];
        acc[cur.from_id] = {
          from_id,
          from_name,
          posts: [...previousPosts, post],
        };
        return acc;
      }, {});

      /* Extract user related information from grouped user posts  */
      const allUserIds = Object.keys(groupedPosts);
      const allUsers = allUserIds.reduce((acc, userId) => {
        const userInfo = {
          userId,
          userName: groupedPosts[userId].from_name,
        };
        acc = [...acc, userInfo];
        return acc;
      }, []);

      setUserPosts(groupedPosts);
      setUsers(allUsers);
      setStatus("idle");
    };
    run();
  }, [token]);

  if (status === "pending") {
    return "Fetching posts . . .";
  }

  return (
    <div>
      <UsersList
        users={users}
        changeCurrentUserId={changeCurrentUserId}
        currentUserId={currentUserId}
        userPosts={userPosts}
      />
      <PostsLists userPosts={userPosts} currentUserId={currentUserId} />
    </div>
  );
};

export default Posts;
