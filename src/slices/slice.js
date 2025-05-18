import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: 'light',
};

export const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        },
        setMode: (state, action) => {
            state.mode = action.payload;
        }
    }
});

export const { toggleMode, setMode } = slice.actions;
export default slice.reducer;
