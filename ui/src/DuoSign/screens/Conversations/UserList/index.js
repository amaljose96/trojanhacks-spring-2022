import React from "react";
import { UserListContainer,User } from "./styles";

function UserList({ selectedUser, setSelectedUser }) {
  let users = ["amaljose96", "srinicoder", "csenthil", "vijappu"]
  return <UserListContainer>
    {
      users.map((user) => {
        return <User onClick={() => {
          setSelectedUser(user)
        }} active={selectedUser == user}>{user}</User>
      })
    }
  </UserListContainer>;
}
export default UserList;