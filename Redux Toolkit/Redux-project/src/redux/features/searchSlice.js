import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        query : '',
        activeTab: 'photos',
        loading: false,
        results: [],
        error: null
    },
    reducers: {
        setQuery: (state , actions) => {
            state.query = actions.payload
        },
        setActiveTab : (state, actions) => {
            state.activeTab = actions.payload
        },
        setLoading: (state) => {
            state.loading = true,
            state.error = null
        },
        setResults : (state, actions) => {
            state.results = actions.payload,
            state.loading = false
        },
        setError : (state, actions) => {
            state.error = actions.payload,
            state.loading = false
        },


    }
})

export const {setQuery , setActiveTab , setLoading, setResults , setError} = searchSlice.actions;
export default searchSlice.reducer;