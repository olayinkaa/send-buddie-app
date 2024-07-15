import { useEffect, Suspense } from "react";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import queryClient from "./react-query/queryClient";
import store from "./redux/store";
import { LazyLoaderFallback } from "./components/@ui-kits";
// import config from "./config";
// import { useOnlineStatus } from "./hooks";
// import { notification } from "./utils";
// import AppRoutes from "./routing/AppRoutes";
import RouteRenderer from "./routing/core/route-renderer";

export const persistor = persistStore(store);

function App() {

    // const online = useOnlineStatus();
    // TODO: kindly remove or comment this useEffect on final deployment to production
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            document.documentElement.classList.add("debug-screens");
        }
    }, []);

    // if (online) {
    //     notification({ message: "Network connected", status: "info", direction: "bottom-left" });
    // }
    // if(!online){
    //     notification({ message: "Network disconnected", status: "error", direction: "bottom-left" });
    // }

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    {/* <AppRoutes /> */}
                    <BrowserRouter>
                        <Suspense fallback={<LazyLoaderFallback />}>
                            <RouteRenderer />
                        </Suspense>
                    </BrowserRouter>
                    <ReactQueryDevtools position="bottom-right" initialIsOpen={false} />
                    <ToastContainer theme="colored" />
                    <Toaster/>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    );
}

export default App;
