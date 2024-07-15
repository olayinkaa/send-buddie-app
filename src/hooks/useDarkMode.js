import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setThemeMode } from "../redux/reducers/app-slice";

const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.localStorage) {
        const storedPrefs = window.localStorage.getItem("current-theme");
        if (typeof storedPrefs === "string") {
            return storedPrefs;
        }
        // if(window.matchMedia("(prefers-color-scheme: dark)").matches){
        // 	return "dark";
        // }
    }
    return "light";
};

const useDarkmode = () => {
    const dispatch = useDispatch()
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("current-theme", "dark");
            dispatch(setThemeMode("dark"))
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.removeItem("current-theme");
            dispatch(setThemeMode("light"))
        }
    }, [theme, dispatch]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return {
        handleThemeSwitch,
        setThemeMode,
        theme,
    };
};

export default useDarkmode;
