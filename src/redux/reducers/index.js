import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import appReducer from "./app-slice";
import authReducer from "./auth-splice";
import userReducer from "./loginUser-slice";

const rootPersistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["authReducer", "userReducer"],
};

const baseReducer = combineReducers({
    appReducer,
    userReducer,
    authReducer,
});

const rootReducer = (state, action) => {
    /**
     * when a logout action is dispatched it will reset redux state
     */
    if (action.type === "auth/logout") {
        storage.removeItem("persist:root");
        localStorage.removeItem("sid");
        // localStorage.clear();
        localStorage.setItem("username", state.authReducer.user?.firstName);
        localStorage.setItem("email", state.authReducer.user?.email);
        window.location.href = "/login";
        return baseReducer(undefined, action);
    }
    return baseReducer(state, action);
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export default persistedReducer;
