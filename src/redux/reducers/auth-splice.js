/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    accessToken: null,
    decodedToken: {},
    role: "",
    permissions: [],
    user: {},
    profileUpdated: undefined,
    businessDocumentUpdated: false,
    isConfirmDocumentUpdated:true
    // businessDocumentUpdated: true
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false;
            state.accessToken = null;
            state.decodedToken = {};
            state.role = [];
            state.permissions = [];
            state.user = {};
        },
        setAuthenticationDetails: (state, { payload }) => {
            state.isAuthenticated = true;
            state.accessToken = payload.token;
            state.decodedToken = payload.decodedToken;
            state.permissions = payload.permissions;
            state.role = payload.roles;
            state.user = {
                ...payload.rest,
                accountName: `${payload.rest.lastName} ${payload.rest.firstName}`
            };
            state.profileUpdated = payload.profileUpdated;
            state.businessDocumentUpdated = payload.businessDocumentUpdated;
        },
    },
    
});

export const { logout, setAuthenticationDetails } = authSlice.actions;

export default authSlice.reducer;
