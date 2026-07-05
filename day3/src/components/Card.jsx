import React from 'react'

const Card = (props) => {
    console.log(props)
  return (
    <div>
       <div className="card">
        <img src= {props.img} alt="" />
        <h1> {props.username} </h1>
        <p> {props.role} </p>
        <button>view Profile</button>
      </div>
    </div>
  )
}

export default Card
