import { createSlice } from "@reduxjs/toolkit";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";

const initialState = {
    token : CookieStorage.get(CookieKeys.AuthToken),
    isLogin : "",
    user : ""
}

const authLoginSlice = createSlice({ 
    name: "loginAuth",
    initialState,
    reducers : {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state = { ...state, isLogin : action.payload };
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
    }
})

export const {setToken, setTokenGoogle, setIsLoggedIn, setUser} = authLoginSlice.actions;

export default authLoginSlice.reducer;