import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [formData, setFormData] = useState({})
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]:e.target.value})
  }
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      setLoading(true)
      setError(false)
      const res = await fetch('/api/auth/signin', {
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json()
      setLoading(false)
      if(data.success===false){
        setError(true)
        return
      }
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold m-7'>SignIn</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type='email' placeholder='Email' id='email' onChange={handleChange} className='bg-slate-100 p-3 rounded-lg'/>
        <input type='password' placeholder='Password' id='password' onChange={handleChange} className='bg-slate-100 p-3 rounded-lg'/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading?'Loading...':'Sign In'}
          </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p> Don&#39;t have an account</p>
        <Link to='/sign-up'>
        <span className='text-blue-500'>Sign Up</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>{error && 'Something went wrong!'}</p>
    </div>
  )
}

export default SignIn