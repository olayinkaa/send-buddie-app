/* eslint-disable import/no-unresolved */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import GlobalStyles from "../styles/GlobalStyles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import 'react-loading-skeleton/dist/skeleton.css'
import 'regenerator-runtime/runtime'
// TODO: uninstall react-slick, slick carousel
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* <GlobalStyles /> */}
        <App />
    </React.StrictMode>,
);
