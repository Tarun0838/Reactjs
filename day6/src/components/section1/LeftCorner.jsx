import React from 'react'
import {ArrowUpRight} from 'lucide-react'

const LeftCorner = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between py-10 px-2 ' >
      <div className='flex flex-col py-8 px-2 ' >
        <h1 className='text-6xl font-bold mb-4' >Prospective <br /> <span>Customer </span> <br />Segmentation </h1>
        <p className='text-lg mt-2' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime adipisci fugiat magni tenetur accusantium delectus, officia facilis voluptates ipsam?</p>
      </div>
      <div className='' >
        <ArrowUpRight  size={58}/>
      </div>
    </div>
  )
}

export default LeftCorner
