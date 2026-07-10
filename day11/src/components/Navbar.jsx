import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav 
      className='flex items-center justify-between  rounded-3xl py-4 px-8 bg-slate-800 text-white' >
        <h1 className='text-3xl px-4'>Tarun Yadav </h1>
        <div className='flex items-center px-6 gap-10 text-2xl'>
         <Link to='/'> Home </Link>
         <Link to='/about'> About </Link>
         <Link to='/contact'> Contact Us </Link>
         <Link to='/product'> Product </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
