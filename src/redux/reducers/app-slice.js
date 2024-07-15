/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import config from "../../config";

const initialState = {
    ...config,
    themeMode:"light"
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setThemeMode: (state, { payload }) => {
            state.themeMode = payload
        },
    },
});

export const {setThemeMode} = appSlice.actions;

export default appSlice.reducer;
