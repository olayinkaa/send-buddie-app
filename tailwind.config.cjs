/* eslint-disable global-require */
// const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        container: {
            padding: "0",
        },
        extend: {
            backgroundImage: {
                loginHero: "url('../assets/svgs/intro-circles2.svg')",
                productIntro: "url('./assets/images/product-intro.jpg')",
                dashboardIntro: "url('./assets/svgs/dashboard-intro.svg')",
            },
            flex: {
                2: "2 2 0%",
            },
            fontSize: {
                "2lg": ["1.375rem", "2.25rem"],
            },
            colors: {
                "dark-brand": "#0C1217",
                "blue-brand": "#2f57e7",
                "gray-brand": "#fafafa",
                "sendbuddie-light": "#fafafa",
                "inactive-brand": "#f3f3f7",
                "light-blue-brand": "#F7FAFC",
                "outline-brand": "#e0e3eb",
                "input-wrapper": "rgba(255, 255, 255, 0.2)",
                "light-heading": "#e5e7eb",
                "dark-heading": "#3C457E",
                "hover-brand":"#edf2f7",
                "hover-text-brand":"#425466"
            },
            listStyleType: {
                none: "none",
                disc: "disc",
                decimal: "decimal",
                square: "square",
                roman: "upper-roman",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require('tailwindcss-debug-screens'),
        require("tailwindcss-brand-colors"),
        require('@headlessui/tailwindcss')({ prefix: 'ui' }),
        require('tailwind-scrollbar'),
        require("tailwindcss-animate"),
        // eslint-disable-next-line func-names
        plugin(function ({ addComponents }) {
            addComponents({
                ".login-hero": {
                    "background-color": "#ffffff",
                    "background-image": 'url("../assets/svgs/intro-circles2.svg")',
                    "background-size": "100%",
                    "background-repeat": "no-repeat",
                    backgroundPosition: "center",
                    /* background-position: center var(--intro-h); */
                    "padding-top": "54px" /* 68px; */,
                },
            });
        }),
    ],
};
