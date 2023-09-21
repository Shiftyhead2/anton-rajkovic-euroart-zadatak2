import React from 'react';
import UsersComponent from './UsersComponent';

function UserList({users, setCurrentUser}) {
  return (
    <div className="flex flex-row flex-wrap gap-8 content-center ml-5 mr-5">
      {users.map((user) =>
        <UsersComponent key = {user.id} user = {user} setCurrentUser={setCurrentUser}></UsersComponent>
      )}
    </div>
  );
};

export default UserList;