import React from 'react'

function UserData({currentUser}) {
  return (
    <div className='flex justify-center items-center flex-col gap-5 rounded-md bg-cyan-900 mt-5 outline outline-2 outline-slate-950 p-5'>
      <img className='rounded-full bg-cyan-400 w-30  outline outline-2 outline-slate-950'
        src={currentUser.avatar}
        alt={currentUser.username}
      />
      <div className='flex justify-center gap-4 flex-col text-white'>
        <div>
          <p>Name: {currentUser.first_name} {currentUser.last_name}</p>
          <p>Title: {currentUser.employment.title}</p>
          <p>Email: {currentUser.email}</p>
          <p>Phone number: {currentUser.phone_number}</p>
          <p>Date of Birth: {currentUser.date_of_birth}</p>
        </div>
        <div>
          <p>City: {currentUser.address.city}</p>
          <p>Street name: {currentUser.address.street_name}</p>
          <p>Street address: {currentUser.address.street_address}</p>
          <p>Country: { currentUser.address.country}</p>
        </div>
        
      </div>
    </div>
  );
}

export default UserData;