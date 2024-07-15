import { Outlet } from "react-router-dom";

import SideBar from "./sidebar/SideBar";
import Header from "./Header";

function PrivateLayout() {
    return (
        <div className="flex h-screen w-screen overflow-x-hidden bg-white">
            {/* left sidebar */}
            <div className="">
                <SideBar />
            </div>
            {/* right sidebar */}
            <aside className="flex flex-1 flex-col overflow-y-scroll">
                    <Header />
                    <div className="h-full">
                        <Outlet />
                    </div>
            </aside>
        </div>
    );
}

export default PrivateLayout;
