import React from 'react'

const Test = () => {
  const scrolling = (e) => {
    console.log("Scrolling speed ", e.deltaY)
  }

  return (
    <>
      <div onWheel={(e)=> {
        scrolling(e)
      }}>
        <div className='h-screen w-full bg-sky-950' ></div>
        <div className='h-screen w-full bg-indigo-900' ></div>
        <div className='h-screen w-full bg-red-400' ></div>
        <div className='h-screen w-full bg-yellow-300' ></div>
      </div>
    </>
  )
}

export default Test
