import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light',
}

export const slice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        modalApp: (state) => {
            console.log(state)
        }
    }
})

export const { modalApp } = slice.actions