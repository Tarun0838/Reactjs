import React from 'react'

const Theme = (props) => {
  return (
    <div>
      <button
      onClick={()=> {
        props.settheme("dark")
      }}
      > Change Theme </button>
    </div>
  )q
}

export default Theme
