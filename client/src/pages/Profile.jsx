import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
    <form className='flex flex-col gap-4'>
      <img src={currentUser.profilePicture} alt='profile' 
      className='h-24 w-24 mt-2 self-center cursor-pointer rounded-full object-cover'/>
      <input type='text' defaultValue={currentUser.username} id='username' placeholder='Username' className='bg-slate-100 rounded-lg p-3 '/>
      <input type='email' defaultValue={currentUser.email} id='email' placeholder='Email' className='bg-slate-100 rounded-lg p-3 '/>
      <input type='password' id='password' placeholder='Password' className='bg-slate-100 rounded-lg p-3 '/>
      <button className='bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 disabled:opacity-80 uppercase'>Update</button>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </form>
    </div>
  )
}

export default Profile