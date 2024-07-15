/* eslint-disable react/prop-types */
import { WifiLoader } from "react-awesome-loaders";

export default function LazyLoaderFallback({ text, bgColor}) {
    return (
        <div className={`fixed top-0 z-50 flex h-screen w-screen flex-col items-center justify-center ${bgColor} bg-opacity-90`}>
            <WifiLoader
                background="transparent"
                desktopSize="100px"
                mobileSize="50px"
                text={text}
                backColor="#87bcf1"
                // backColor="#E8F2FC"
                frontColor="#4645F6"
            />
        </div>
    );
}

LazyLoaderFallback.defaultProps = {
    text: "SENDBUDDIE",
    opacity:"",
    bgColor:"bg-white dark:bg-black"
};
