import { useState } from 'react'
import './App.css'
import React from 'react'
import Theme from './components/Theme'

const App = () => {
  const [theme, settheme] = useState("Light")
  return (
    <div>
      <h1>Theme is {theme} </h1>
      <Theme theme = {theme} settheme = {settheme} />
    </div>
  )
}

export default App
