import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
    name: 'likes',

    initialState: {
        like : 0,
        dislike: 0
    },
    reducers: {
        like : (state) => {
            state.like += 1;
        },
        dislike : (state) => {
            state.dislike +=1
        }

    }
})


export const {like , dislike} = likeSlice.actions;
export default likeSlice.reducer
