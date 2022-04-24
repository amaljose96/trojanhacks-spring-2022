import React from "react";
import { getUsers } from "./service";
import { UserListContainer, User,OnlineMarker } from "./styles";

function UserList({ selectedUser, setSelectedUser }) {
  const [users,setUsers] = React.useState([]);
  React.useEffect(()=>{
    getUsers().then(data=>{
      setUsers(data)
    })
  },[])
  return <UserListContainer>
    {
      users.map((user) => {
        return <User onClick={() => {
          setSelectedUser(user)
        }} active={selectedUser.username == user.username}>
          <OnlineMarker online={user.online}/>
          {user.username}
        </User>
      })
    }
  </UserListContainer>;
}
export default UserList;