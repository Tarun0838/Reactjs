import React from 'react'
import { useParams } from 'react-router-dom'

const ContactDetail = () => {

    const param = useParams();
    console.log("param : ", param.id)

  return (
    <div className='flex items-center justify-center py-20 gap-5 '>
      <h1 className='text-3xl font-semibold '>Contact Details </h1>
      <h2> ContactDetail/{param.id} Hit hui hai </h2>
    </div>
  )
}

export default ContactDetail
