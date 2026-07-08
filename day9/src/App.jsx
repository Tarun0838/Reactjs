import React, { useState ,useEffect } from 'react'
import axios from 'axios'
import UseEffect from './components/UseEffect';
const App = () => {


  const getData = async ()=> {
    const response = await axios.get('https://picsum.photos/v2/list');
    const response1 = await axios.get('https://picsum.photos/seed/picsum/200/300');

    console.log(response)
    console.log(response1)
  }

  // localStorage.setItem("username" , "tarun yadav ");
  // const username = localStorage.getItem("username") 
  const [user, setuser] = useState({})
  // const user1 = {
  //   name : "Tarun yadav",
  //   age: 20,
  //   skills : ["c++", 'python ', 'javascript ']
  // }

  useEffect(() => {
    const user1 = {
    name : "Tarun yadav",
    age: 20,
    skills : ["c++", 'python ', 'javascript ']
  }
  
  localStorage.setItem("user" , JSON.stringify(user1))
  setuser(user1)
    
  }, [])
  

  // localStorage.setItem("user", JSON.stringify(user1));

  // const data= localStorage.getItem("user");
  // const jsonData = JSON.parse(data);
  // setuser(jsonData)
  
 



  return (
    <div>


      <UseEffect /> 

      <h1>Local Storage </h1>
      <p>Basically means that the browser's memory </p>

     <h1> {user.name} {user.age}, {user.skills?.[1]} </h1>

      <h1>
        APi call
      </h1>
      <button onClick={getData}> Get Data  </button>




    </div>
  )
}

export default App
