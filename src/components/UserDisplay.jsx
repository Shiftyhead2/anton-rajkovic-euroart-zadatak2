import React from 'react';
import UserData from './UserData';

function UserDisplay({currentUser,setCurrentUser}) {
  return (
    <div className='flex justify-center items-center flex-col gap-5'>
      {currentUser ? <UserData currentUser={currentUser}></UserData> : <></>}
      {currentUser ? <div className='flex flex-row gap-5 justify-around'>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCurrentUser(null);
          }}
          className='px-10 py-2 bg-cyan-900 text-white rounded-md outline outline-2 outline-black hover:bg-cyan-700 '>
          Back
        </button>
        <a
          href={currentUser ? `https://www.google.com/maps/search/?api=1&query=${currentUser.address.coordinates.lat}%2C${currentUser.address.coordinates.lng}`: `https://www.google.com`}
          target="_blank"
          rel="noreferrer"
          className='px-10 py-2 bg-cyan-900 text-white rounded-md outline outline-2 outline-black hover:bg-cyan-700'>
          Location
        </a>
      </div> : <></>}
     
    </div>
  )
}

export default UserDisplay