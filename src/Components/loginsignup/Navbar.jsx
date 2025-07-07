import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
    <nav className='bg-black  h-[100px] text-white flex justify-between items-center'>
        <ul>
            <li className='flex content-left items-center pl-10 gap-7'>




             
                <Link className='text-3xl font-semibold tracking-tighter'>Explore!</Link>
                <Link to='/' className='text-2xl font-semibold tracking-tighter'>SignUp</Link>
                 <Link to='login' className='text-2xl font-semibold tracking-tighter'>Login</Link>
              
            </li>
        </ul>
    </nav>
    </div>
  )
}

export default Navbar
