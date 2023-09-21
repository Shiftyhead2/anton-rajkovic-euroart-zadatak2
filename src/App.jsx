import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserDisplay from "./components/UserDisplay";

function App() {

  const [users, setUsers] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://random-data-api.com/api/v2/users?size=10");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  },[]);

  return (
    <div className="w-full h-100vh">
      {users && !currentUser ? <UserList users={users} setCurrentUser={setCurrentUser}></UserList> :
        <UserDisplay currentUser={currentUser} setCurrentUser={setCurrentUser}></UserDisplay>}
    </div>
  );
}

export default App;
