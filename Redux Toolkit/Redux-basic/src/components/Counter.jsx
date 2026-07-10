import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, decrementBy5, increment, incrementBy5 } from '../redux/feature/counterSlice';

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value)
    return (
        <div className='p-20 m-10'>
            <h1>Learning Redux Toolkit </h1>
            <h1 className='p-4 m-5 text-3xl font-semibold'> {count} </h1>


            <div className='flex gap-5 text-white'>
                <button
                    onClick={() => {
                        dispatch(increment())
                    }}
                    className='py-4 px-8 rounded-3xl bg-blue-950'>Increment</button>

                <button
                    onClick={() => {
                        dispatch(decrement())
                    }}
                    className='py-4 px-8 rounded-3xl bg-blue-950'>Decrement </button>

                <button
                    onClick={() => {
                        dispatch(incrementBy5())
                    }}
                    className='py-4 px-8 rounded-3xl bg-blue-950'
                >Increase by 5
                </button>


                <button
                    onClick={() => {
                        dispatch(decrementBy5(10))
                    }}
                    className='py-4 px-8 rounded-3xl bg-blue-950'
                >Decrement by 5
                </button>
            </div>
        </div>
    )
}

export default Counter
