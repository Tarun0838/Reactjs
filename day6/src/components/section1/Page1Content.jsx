import React from 'react'
import LeftCorner from './LeftCorner'
import RightCorner from './RightCorner'

const Page1Content = () => {
  return (
    <div className='px-10 py-6 h-[90vh] bg-white flex items-center gap-6' >
      <LeftCorner/>
      <RightCorner/>
    </div>
  )
}

export default Page1Content
