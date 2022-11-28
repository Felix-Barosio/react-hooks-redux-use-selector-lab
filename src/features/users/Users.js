import React from "react";
import { useSelector } from "react-redux";
// add any needed imports here

function Users() {
  const users = useSelector((state) => state.users)
  const length = useSelector((state) => state.users.length)
  return (
    <div>
      <ul>
        Users!
        {users.map((user) => <li key={user.username}>{user.username}</li>)}
        {`Total Users: ${length}`}
      </ul>
    </div>
  );
}

export default Users;
