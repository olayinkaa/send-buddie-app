import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    optimizeDeps: {
        esbuildOptions: {
            target: "es2020",
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    esbuild: {
        // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
        logOverride: { "this-is-undefined-in-esm": "silent" },
    },
    plugins: [
        react({
            babel: {
                plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
            },
        }),
    ],
    server: {
        host: true,
        strictPort: true,
        port: 4006,
    },
});
