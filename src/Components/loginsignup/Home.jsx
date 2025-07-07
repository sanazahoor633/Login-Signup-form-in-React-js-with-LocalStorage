import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/')
  }


  return (
    <div>
    <Navbar/>
    <div className='flex justify-around mt-10'>
      <h2 className='text-3xl font-semibold  tracking-tighter'>Welcome to Home Page ! </h2>
      <button  className='bg-blue-900 w-[150px] h-[60px] text-white text-[25px] tracking-tighter rounded-md hover:bg-blue-600 transition-all duration-200'  onClick={logout}>Logout out</button>
    </div>
    </div>
  )
}

export default Home
