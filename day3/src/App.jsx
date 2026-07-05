import React from 'react'
import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent' >
     <Card username ='Tarun' role='Backend Developer' img='https://images.unsplash.com/photo-1706307121034-81829ec35a0d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJveXxlbnwwfHwwfHx8MA%3D%3D' />
     <Card username='Vishnu' role='Frontend Developer' img='https://images.unsplash.com/photo-1588953936179-d2a4734c5490?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGJveXxlbnwwfHwwfHx8MA%3D%3D' />
     <Card username='Priyanshu' role='Vibe Coder' img ='https://images.unsplash.com/photo-1628851479386-3f6db0efa7fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGJveXxlbnwwfHwwfHx8MA%3D%3D' />
     <Card username='Yash'  role ='Entertainment & Coding' img='https://plus.unsplash.com/premium_photo-1682098022877-593355cd975a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGJveXxlbnwwfHwwfHx8MA%3D%3D' />
     
    
    </div>
  )
}

export default App
