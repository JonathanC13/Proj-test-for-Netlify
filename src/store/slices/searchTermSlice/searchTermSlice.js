import {createSlice} from '@reduxjs/toolkit'

export const searchTermSlice = createSlice({
    name: 'searchTerm',
    initialState: {
        value: 'a'
    },
    reducers: {
        setSearchTerm: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setSearchTerm } = searchTermSlice.actions

export default searchTermSlice.reducer