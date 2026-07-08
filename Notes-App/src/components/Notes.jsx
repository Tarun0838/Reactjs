import React, { useState } from 'react'
import { X } from 'lucide-react';

const Notes = () => {

  const [title, settitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, settask] = useState([])


  const sumbitHandler = (e)=> {
    e.preventDefault();
    console.log("form submitted ")
    // console.log(title , details)

    // task ki copy banao
    const copyTask = [...task]
    copyTask.push({title: title , details: details})
    settask(copyTask)
    console.log(copyTask)


    settitle('')
    setDetails('')
  }


  // details input handler 
  const deleteNote = (idx) => {
    // task ki copy banao
    const copyTask = [...task]
    console.log(copyTask)

    copyTask.splice(idx , 1);
    settask(copyTask)

  }



  return (
    <div className='h-screen w-full bg-gray-800 text-white lg:flex'>
       <form 
       className='flex  flex-col items-start lg:w-1/2 gap-5 p-10' onSubmit={(e)=> {sumbitHandler(e)}}>
        <div className='flex items-center justify-center gap-2 p-5'>
          <h1 className='text-6xl bg-gray-900 p-5 rounded-2xl' >Notes App </h1>
          <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/047/247/652/small/notepad-icon-with-pencil-icon-3d-rendering-illustration-png.png" 
          alt="notes png "
          className='w-20 h-20 object-cover' />
        </div>


        {/* PHELA TITLE INPUT  */}

        <input 
        type="text"
        placeholder='title'
        className='bg-gray-900 py-8 px-10 h-10 w-full rounded-3xl text-3xl'
        value={title}
        onChange={(e)=> {settitle(e.target.value)}}
         />

          {/* Detail input  */}

        <textarea 
        name="text-area" 
        placeholder='Enter details'
        value={details}
        onChange={(e)=> {setDetails(e.target.value)}}
        className='bg-gray-900 py-4 px-10 h-40 w-full rounded-3xl text-3xl'
        >
        </textarea>
        <button
        className='bg-white py-2 px-10 h-20 w-fit rounded-3xl text-3xl text-black mx-auto my-3 font-semibold active:bg-slate-900 '
        >Add Notes</button>
       </form>

        {/* RECENT NOTES  */}


       <div className='h-screen lg: w-full bg-gray-900 p-10 overflow-scroll ' >
          <h1 className='text-4xl font-semibold p-3 m-2 ' > Recents Notes </h1>
        <div className='h-screen w-full flex flex-wrap  gap-5' >
          {
            task.map((elem , idx)=> {
              return <div key={idx} className='h-70 w-80 bg-slate-800 rounded-2xl p-6 text-2xl font-semibold relative ' >
                <button
                className='absolute right-0 top-0 p-2 bg-red-700 rounded-full m-2 hover:bg-red-950 active:bg-red-800 '
                onClick={()=> {
                  deleteNote(idx)
                }}
                > 
                <X size={18} color="black" /> </button>
                <h1 
                className='text-blue-400 text-3xl' > Title : <span 
                className='text-white text-2xl p-3' >
                  {elem.title} </span> </h1>
                <p
                className='text-blue-400 text-3xl mt-3 '
                >
                Details : 
                <span className='text-white text-2xl p-3'
                >  {elem.details}  </span>
                </p>
              </div> 
            })
          }
          
          
        </div>
       </div>
    </div>
  )
}

export default Notes
