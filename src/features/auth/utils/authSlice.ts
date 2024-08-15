import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') || JSON.stringify(false),
    user: null, 
    token: null
}

export const authSlice = createSlice({
    name: 'userLoginStatus',
    initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            state.isAuthenticated = action.payload
            localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated))
        },
    }
})

export const { setLoginStatus } = authSlice.actions

export default authSlice.reducer
