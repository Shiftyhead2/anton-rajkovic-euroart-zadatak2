import React from 'react'

function UsersComponent({ user , setCurrentUser }) {
  
  const getCurrentUser = (currentUser) => {
    setCurrentUser(currentUser);
  }

  return (
    <div className="rounded-md bg-cyan-900 p-5 justify-evenly outline outline-2 outline-slate-950 mt-4  cursor-pointer hover:bg-cyan-700 transition-all duration-300"
      onClick={(e) => {
        e.preventDefault();
        getCurrentUser(user);
      }}>
      <img className="rounded-full bg-cyan-400 w-30 p-1 outline outline-2 outline-slate-950" src={user.avatar} alt={user.username} />
      <div className="mt-4">
        <p className="text-white">Name: {user.first_name} {user.last_name}</p>
        <p className="text-white">Title: {user.employment.title}</p>
      </div>
    </div>
  );
};

export default UsersComponent;