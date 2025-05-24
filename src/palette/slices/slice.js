import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
    try {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user?.darkMode === true) return 'dark';
    } catch {
        return 'light';

    }
};


const initialState = {
    mode: getInitialMode(),
};

export const slice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === 'light' ? 'dark' : 'light';
            const user = JSON.parse(localStorage.getItem("user"));
            if (user) {
                user.darkMode = state.mode === 'dark';
                localStorage.setItem("user", JSON.stringify(user));
            }

        },
        setMode: (state, action) => {
            state.mode = action.payload;
        }
    }
});

export const { toggleMode, setMode } = slice.actions;
export default slice.reducer;
