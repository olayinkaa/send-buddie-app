import toast from "react-hot-toast";
import clsx from "classnames";
import logo from "@/assets/favicon.ico";

// src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
export default function SendBuddieToaster({
    icon = <img className="h-10 w-10 rounded-full border border-blue-400" src={logo} alt="" />,
    title,
    message,
    status = "success",
    position = "top-right",
    duration = 4000,
    options,
} = {}) {
    toast.custom(
        (t) => {
            const baseClass = clsx({
                "border border-red-500": status === "error",
                "border border-teal-500": status === "success",
                "animate-enter": t.visible,
                "animate-leave": !t.visible,
                // "ring-1 ring-green-500 ": !errors[name]?.message && isTouched,
            });

            return (
                <div
                    className={`${baseClass} max-w-md w-full bg-gray-50 shadow-lg 
                    rounded-lg pointer-events-auto flex ring-1
                    ring-black ring-opacity-5 transition duration-1000 hover:translate-y-1 `}
                >
                    <div className="flex-1 w-0 p-4">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5">{icon}</div>
                            <div className="ml-3 flex-1">
                                {title && <p className="text-md font-medium text-gray-900">{title}</p>}
                                {message && <p className="mt-1 text-md text-gray-500">{message}</p>}
                            </div>
                        </div>
                    </div>
                    <div className="flex border-l border-gray-200">
                        <button
                            type="submit"
                            onClick={() => toast.dismiss(t.id)}
                            className="w-full border border-transparent rounded-none rounded-r-lg 
                            p-4 flex items-center justify-center text-sm font-medium
                            text-indigo-600 hover:text-indigo-500 focus:outline-none 
                            active:bg-gray-100
                             "
                        >
                            Close
                        </button>
                    </div>
                </div>
            );
        },
        { position, duration, ...options },
    );
}
