import React from "react";

const UsersList = ({
  users,
  changeCurrentUserId,
  currentUserId,
  userPosts,
}) => {
  return (
    <div className="container">
      <div className="left_box">
        <ul>
          {users.map((user) => {
            return (
              <li key={user.userName}>
                <button
                  onClick={changeCurrentUserId(user.userId)}
                  className={currentUserId === user.userId ? "active" : ""}
                >
                  {user.userName} {"\n"}
                  <span>{userPosts[user.userId]?.posts?.length}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
