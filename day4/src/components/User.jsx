import React from 'react'
import '../App.css'

const User = () => {
    // const arr = ['Tarun', 'vishnu', 'yash', 'tushar', 'karan'];
    // array of object 
    const data = [ {user : "Tarun" , id : 1}, {user: "tushar", id: 2}, {user: "karan",id: 3}, {user: "hidude" , id: 4} ]
  return (
    <div className='user'>
      {data.map((e)=> {
        return <h1 key={e.id} > {e.user} </h1>
      })}
    </div>
  )
}

export default User
