/* eslint-disable react/prop-types */
import React from "react";

function Container({children}) {
    return (
        <div className="w-full p-4">
            <div className="w-[95%] mx-auto flex gap-3">
                   {children}
            </div>
        </div>
    );
}

export default Container;
