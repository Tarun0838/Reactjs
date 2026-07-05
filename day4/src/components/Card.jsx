import React from 'react'
import { Bookmark } from 'lucide-react'
// import './App.css'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        {/* //top */}
        <div className="top">
          <div>
            <img id='top-logo' src={props.logo} alt="" />
            <button>Save <Bookmark size={16} /> </button>
          </div>
        </div>

        {/* // center */}
        <div className="center">
          <h3>{props.company}<span>{props.posted}</span> </h3>
          <h2>{props.role}</h2>
          <div>
            <h4>part-time</h4>
            <h4>Senior level</h4>
          </div>
        </div>

        {/* //bottom */}
        <div className="bottom">
          

            <div>
              <h3> {props.salary} </h3>
              <p> {props.location} </p>
            </div>

            <button>Apply now</button>


          
        </div>

      </div>
    </div>
  )
}

export default Card
