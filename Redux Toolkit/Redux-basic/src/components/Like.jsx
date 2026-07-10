import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dislike, like } from '../redux/feature/LikeSlice';

const Like = () => {
    const dispatch = useDispatch();
    const countLike = useSelector((state)=> state.like.like)
    const dislikeCount = useSelector((state)=> state.like.dislike)
    return (
        <div className='h-screen w-full bg-slate-700 text-white flex items-center flex-wrap'>

            <h1 className='font-bold px-20 py-10 text-5xl'>Like & Dislike </h1>
            <div className='h-120 w-90 bg-slate-900 p-20 rounded-3xl   '>
                <img
                    className='object-cover h-full w-full size-140 rounded-3xl'
                    src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?q=80&w=1014&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Dog image" />

                <div className='flex items-center justify-center mt-2 gap-5 p-4'>
                    <button 
                    onClick={()=> {
                        dispatch(like())
                    }}
                    className='bg-white text-black rounded-3xl py-3 px-8'> {countLike} Like </button>
                    <button
                    onClick={()=> {
                        dispatch(dislike())
                    }}
                     className='bg-white text-black rounded-3xl py-3 px-8'> {dislikeCount} Dislike</button>
                </div>
            </div>

        </div>
    )
}

export default Like
