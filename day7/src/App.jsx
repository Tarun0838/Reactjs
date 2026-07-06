import React from 'react'
import { useState } from 'react';
import Test from './components/Test';
const App = () => {

  const btnClicked = () => {
    console.log("button is clicked ");

  }

  const mouseEnter = () => { console.log("mouse Entered ") }
  const mouseOut = () => { console.log("mouse Out ") }
  const inputChanging = (e) => { console.log('user is Typing....', e.target.value) }
  const colors = [
    "red",
    "pink",
    "blue",
    "indigo",
    "purple",
    "orange",
    "black"
  ];
const mouseMove  = (e)=> {
  console.log(e.clientX , e.clientY)

}
const scrolling = (e)=> {
  console.log('scrolling' , e.deltaY)
  
}

return (
  <div>
    {/* <h1>Hello Tarun</h1>
      <button onDoubleClick={btnClicked} className='p-4 text-lg bg-blue-400 rounded-2xl'
      >Click here </button>

      <button className='bg-sky-800 p-4 rou
      nded-4xl' >Login</button>
      <br />
      <input onChange={inputChanging} type="text" placeholder='Enter your Name ' className='p-4 m-10 bg-indigo-500 text-white font-bold border-blue-500 rounded-3xl' /> */}

    <div className='h-70 w-100 bg-indigo-500 rounded-4xl bgsky m-20'
      onMouseMove={mouseMove}
    >
      <div onWheel={scrolling} >
        <div className='h-screen w-full bg-indigo-500' >

      </div>a
      <div className='h-screen w-full bg-green-300' ></div>
      <div className='h-screen w-full bg-purple-500' ></div>

      </div>
    </div>

    <Test/>
  </div>
)
}
export default App
