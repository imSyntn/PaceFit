import { createSlice } from "@reduxjs/toolkit";

const userSclice = createSlice({
    name: 'userSlice',
    initialState: {
        email: null,
        uid: null,
        displayName: null,
        photoURL: null,
    },
    reducers: {
        logIn: (state, action)=> {
            state.email = action.payload.email
            state.uid = action.payload.uid
            state.displayName = action.payload.displayName
            state.photoURL = action.payload.photoURL
        },
        logout: (state) => {
            state.email = null
            state.uid = null
            state.displayName = null
            state.photoURL = null
        },
        updateProfileInRedux: (state,action)=> {
            state.displayName = action.payload.displayName
            state.photoURL = action.payload.photoURL
        }
    }
})

export const {logIn, logout, updateProfileInRedux} = userSclice.actions
export default userSclice.reducer