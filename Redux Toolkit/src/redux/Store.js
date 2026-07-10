import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/counterSlice";
import likeReducer from './feature/LikeSlice'
export const store = configureStore({
    reducer : {
        counter: counterReducer,
        like : likeReducer
    }
});
