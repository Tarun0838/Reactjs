import React, { useState } from 'react'

const Form = () => {
     const [text , setText ] = useState('')
    // submit handler
    const submitHandler = (e) => {
        // preventing default behaviour 
        e.preventDefault();
        console.log('Form Submitted By : ' , text)
        setText('')

    }

    return (
        <div className='h-screen w-full p-20 bg-gray-700' >
            <h1 className='text-white text-6xl font-medium p-5 m-6'> Form Handling in React js </h1>
            <div>
                <form className='flex flex-col gap-4 items-center' onSubmit={(e) => submitHandler(e)} >

                    <input
                        className='py-3 px-6  text-white text-2xl  bg-gray-500 rounded-3xl' type="text"

                        placeholder='Enter your Name '
                        value = {text}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setText(e.target.value)
                        }}
                         />

                    <button className='py-3 px-8 w-fit text-white text-2xl  bg-gray-500 rounded-3xl'> Submit </button>
                </form>
            </div>

        </div>
    )
}

export default Form
