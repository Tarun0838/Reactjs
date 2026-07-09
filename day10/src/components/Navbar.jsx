import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div >
      <nav
       className='flex items-center justify-between px-8 py-6 rounded-3xl bg-slate-800 shadow-2xl shadow-slate-900 text-white text-lg'
       >
        <h1 className='text-3xl shadow-2xl shadow-blue-950 hover:scale-75'>Tarun Yadavv</h1>
        <div className='flex items-center gap-10 px-10'>
           <Link to= "/" >Home </Link>
           <Link to= "/about" >About </Link>
           <Link to= "/contact" >Contact </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
