import React from 'react'
import Card from './components/Card.jsx'
import './App.css'
import Navbar from './components/Navbar.jsx'
const App = () => {
  const user = "Tarun"
  const age= 20
  return (
    <>
    <Navbar/>
    <h1>Hello Guys, {user} </h1>
    <h2>Guys I am {age} year old </h2>
    <Card/>

    <Card /> 
    <Card /> 
    <Card /> 
    <Card /> 

    </>


  )
}

export default App
