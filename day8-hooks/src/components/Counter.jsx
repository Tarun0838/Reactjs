import React, { useState} from 'react'


const Counter = () => {

    //using useState hook
    const [num, setnum] = useState(0)
    const increaseNum = () => { setnum(num+1) }
    const decreaseNum = () => { if(num>=0) setnum(num-1) }
  return (
    <div className=' h-80 w-120 bg-gray-400 p-10'>
      <h1 className='bg-indigo-600 w-fit py-3 px-6 rounded-2xl mx-30' > {num} </h1>
      <button className='bg-gray-500 py-3 px-5 rounded-4xl m-6 text-white text-lg' onClick={increaseNum} > Increase </button>
      <button className='bg-gray-500 py-3 px-5 rounded-4xl m-6 text-white text-lg' onClick={decreaseNum}> Decrease </button>
    </div>
  )
}

export default Counter
