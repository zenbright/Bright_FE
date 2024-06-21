import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
}

export const authSlice = createSlice({
    name: 'userLoginStatus',
    initialState,
    reducers: {
        setLoginStatus: (state, action) => {
            state.isAuthenticated = action.payload
        },
    }
})

export const { setLoginStatus } = authSlice.actions

export default authSlice.reducer
