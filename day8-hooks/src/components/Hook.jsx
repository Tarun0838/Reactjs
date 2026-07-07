import React, { useState } from 'react'

const Hook = () => {
    const [num , setnum] = useState({user: "Tarun", age: 20})
   const [arr , setarr] = useState([10, 20, 30])

   const changeArr = () => {
    const newArr = [...arr];
    console.log(`copy arr : ${newArr}`)
    newArr.push(50)
    newArr.push(60);

    setarr(newArr)
   }

    const changeuser = ()=> {
        // copy banaounga user ki
        // const newuser = {...num};
        // console.log("copy user  : ", newuser)
        // newuser.user = "Hidude";
        // newuser.age= 22

        // setnum(newuser)
        // console.log("new user : ", newuser)
        // console.log("num : ", num)

        // ANOTHER MEHTOD OF CHANGE 

        setnum(prev=> ({...prev , user:"yash", age: 32}))
        
    }
    
  return (
    <div className='h-screen w-full'>
      <h1 className='p-8 m-10 bg-rose-400 rounded-3xl text-white text-2xl font-bold' > username : {num.user} age is : {num.age} </h1>
      <button className='py-3 px-8 mx-20 bg-sky-600 rounded-4xl text-2xl text-white font-bold' onClick={changeuser} >Change </button>

      <h1 className=' text-3xl text-purple-500 m-10'> Array : { arr } </h1>
      <button className='bg-gray-400 p-10 rounded-3xl ' onClick={changeArr} > change Arr </button>
    </div>
  )
}

export default Hook
