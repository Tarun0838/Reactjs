import React from 'react'
import {ArrowRight} from 'lucide-react'
const Card = (props) => {
  return (
    <div className='h-full overflow-hidden shrink-0  w-80 rounded-4xl relative '>
      <img className='h-full w-full object-cover ' src={props.img} alt="" />
      <div className='h-full w-full absolute  top-0 left-0  p-6 flex justify-between flex-col' >
        <h2 className='bg-white h-10 w-10 rounded-full flex items-center justify-center text-2xl font-bold' > {props.number}</h2>
        <div>
            <p className='mb-20 text-white font-medium relative text-lg leading-normal' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore tempore vitae maiores rerum aliquam itaque?</p>
            <div className='flex justify-between' >
                <button className='bg-blue-600 text-white font-semibold px-6 py-2 rounded-full text-sm' >Satisfied</button>
                <button className='bg-blue-600 text-white font-semibold px-3 py-2 rounded-full text-sm'> <ArrowRight/> </button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Card
