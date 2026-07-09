import React from 'react'
import axios from 'axios'

const Gallery = () => {
  // using axios
  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    console.log(response.data[0].author)
    console.log(response.data[0])
  }

  return (
    <div 
    className='h-screen w-full text-white bg-gray-900 p-20' >
      <h1>Gallery Project</h1>
      <button
      onClick={getData}
      className='text-2xl py-3 px-6 rounded-3xl bg-white text-black active:bg-slate-950 font-bold'
      >Get Data </button>
    </div>
  )
}

export default Gallery
