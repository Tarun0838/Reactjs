import React from 'react'
import { fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {
  return (
    <div>
      <h1>Fetching photos</h1>
      <button
        onClick={async() => {
          console.log("button clicked")
         const data = await  fetchPhotos('dog')
         console.log(data.results)
        }}
        className='py-3 px-6 bg-blue-900 text-white rounded-3xl'
      >Get Photos</button>


      <button
        onClick={async() => {
          console.log("button clicked")
         const data = await  fetchVideos('dog')
         console.log(data.videos)
        }}
        className='py-3 px-6 bg-blue-900 text-white rounded-3xl'
      >Get Videos</button>
    </div>
  )
}

export default App
