/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:{

    }
};

export const loginUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoginUserInfo: (state, {payload})=> {
            state.user = payload
        }
    },
});

export const { setLoginUserInfo } = loginUserSlice.actions;

export default loginUserSlice.reducer;
