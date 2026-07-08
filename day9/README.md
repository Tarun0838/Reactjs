# Use Effect Hooks in React js 
* use effect is a type of hook which allow use to run a specific taks or function run on a side stack or micro task 


* import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [num, setnum] = useState(0)
    const [num2, setnum2] = useState(10)

    useEffect( function() {
      console.log( "use effect is running ")
    } , [num , num2 ])
    

  return (
    <div className='h-screen w-full bg-slate-800 text-2xl text-white  p-20'>
      <h1>Use Effect Hooks learning </h1>

      <h1>Num is :  {num} </h1>
      <h1>Num2 is :   {num2} </h1>
      <div className='flex items-center gap-5 m-5'>
        <button 
        onClick={ ()=>  { setnum(num+5) }}
        className='py-3 px-6 bg-white text-black rounded-3xl'>change num </button>

        <button 
        onClick={ () => {setnum2(num2 + 10)} }
        className='py-3 px-6 bg-white text-black rounded-3xl'>change num2 </button>
      </div>


    </div>
  )
}

export default UseEffect
