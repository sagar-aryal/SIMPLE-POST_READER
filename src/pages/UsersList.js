import React, { useEffect, useState } from "react";

const UsersList = ({
  users,
  changeCurrentUserId,
  currentUserId,
  userPosts,
}) => {
  const [searchUsers, setSearchUsers] = useState("");
  const [outputUsers, setOutputUsers] = useState([]);

  const searchHandler = (event) => {
    setSearchUsers(event.target.value);
    //console.log(event.target.value);
  };

  useEffect(() => {
    setOutputUsers(
      users?.filter((user) =>
        user.userName
          .toLocaleLowerCase()
          .includes(searchUsers.toLocaleLowerCase())
      )
    );
  }, [searchUsers, users]);

  return (
    <div className="container">
      <div className="left_box">
        <input
          type="text"
          placeholder="Search Users..."
          onChange={searchHandler}
        />
        <ul>
          {outputUsers
            ?.sort((a, b) => (a.userName > b.userName ? 1 : -1))
            .map((user) => {
              return (
                <li key={user.userId}>
                  <button
                    onClick={changeCurrentUserId(user.userId)}
                    className={currentUserId === user.userId ? "active" : ""}
                  >
                    {user.userName}
                    {"\n"}
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
