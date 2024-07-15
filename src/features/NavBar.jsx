import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon, HiBars3, HiXMark } from "react-icons/hi2";
import { useDarkmode } from "../hooks";

function NavBar() {
    const { theme, handleThemeSwitch } = useDarkmode();
    const location = useLocation();
    const navigate = useNavigate();
    const [isMobileNav, setIsMobileNav] = useState(false);
    const changeThemeMode = (e) => {
        e.preventDefault();
        handleThemeSwitch();
    };

    const handleNavMenu = (e) => {
        e.preventDefault();
        setIsMobileNav(!isMobileNav);
    };

    useEffect(() => {
        setIsMobileNav(false);
    }, [location, theme]);

    return (
        <header className="sticky top-0 z-40 flex max-w-full items-center border-b border-b-neutral-200 dark:border-0 dark:border-b-slate-700 dark:bg-dark-brand bg-white p-3">
            <nav className="container mx-auto flex items-center justify-between ">
                <div className="flex items-center space-x-16 ">
                    <Link to="/home" className="flex items-center">
                        <img src="./assets/images/logo.png" alt="" width="52px" />
                        <span className="text-3xl font-bold dark:text-light-heading">SendBuddie</span>
                    </Link>
                    <div className="hidden gap-10 text-gray-700 dark:text-light-heading lg:!flex">
                        <Link to="#0" className="text-xl font-medium">
                            Product
                        </Link>
                        <Link to="/about" className="text-xl font-medium">
                            About us
                        </Link>
                        <Link to="/faq" className="text-xl font-medium">
                            FAQ
                        </Link>
                    </div>
                </div>
                <div className="hidden gap-7 lg:!flex items-center">
                    <button type="button" className="text-xl" onClick={changeThemeMode}>
                        {theme === "dark" ? (
                            <HiOutlineSun className="dark:text-light-heading" />
                        ) : (
                            <HiOutlineMoon className="text-blue-brand" />
                        )}
                    </button>
                    <Link to="/login" className="text-xl font-medium text-gray-700 dark:text-light-heading ">
                        sign in to your account
                    </Link>
                    <button
                        type="button"
                        className="btn-primary rounded-xl px-10 transition duration-500 hover:translate-y-1"
                        onClick={() => navigate("/signup-option")}
                    >
                        Sign up
                    </button>
                </div>
                <div className="flex lg:hidden">
                    <HiBars3 fontSize={30} className="cursor-pointer dark:text-white" onClick={handleNavMenu} />
                </div>
                {isMobileNav && (
                    <div
                        aria-hidden="true"
                        className="fixed top-0 left-0 z-10 flex h-screen w-screen bg-black/80 lg:hidden"
                        onClick={handleNavMenu}
                    />
                )}
            </nav>
            <section className="block lg:hidden">
                <div className={isMobileNav ? "navbar-side-drawer left-0" : "navbar-side-drawer left-[-100%]"}>
                    <div className="flex h-full flex-col gap-10">
                        <div className="flex justify-between p-3">
                            <Link to="/home" className="flex items-center">
                                <img src="./assets/images/logo.png" alt="" width="32px" />
                                <span className="text-2xl font-bold dark:text-light-heading">SendBuddie</span>
                            </Link>
                            <HiXMark fontSize={30} className="cursor-pointer" onClick={handleNavMenu} />
                        </div>
                        <div className="w-full flex-1">
                            <Link
                                to="#0"
                                className="block border border-neutral-100 p-3 text-lg font-medium hover:bg-hover-brand"
                            >
                                Product
                            </Link>
                            <Link
                                to="/about"
                                className="block border border-neutral-100 p-3 text-lg font-medium hover:bg-hover-brand"
                            >
                                About us
                            </Link>
                            <Link
                                to="/faq"
                                className="block border border-neutral-100 p-3 text-lg font-medium hover:bg-hover-brand"
                            >
                                FAQ
                            </Link>{" "}
                            <Link
                                to="/privacy"
                                className="block border border-neutral-100 p-3 text-lg font-medium hover:bg-hover-brand"
                            >
                                Policy
                            </Link>{" "}
                            <Link
                                to="/terms-and-conditions"
                                className="block border border-neutral-100 p-3 text-lg font-medium hover:bg-hover-brand"
                            >
                                Terms and conditions
                            </Link>
                        </div>
                        <div className="flex flex-col items-center p-3 pb-10">
                            <button type="button" className="py-2 text-xl" onClick={changeThemeMode}>
                                {theme === "dark" ? (
                                    <HiOutlineSun fontSize={20} className="dark:text-gray-060" />
                                ) : (
                                    <HiOutlineMoon fontSize={20} className="text-blue-brand" />
                                )}
                            </button>
                            <Link to="/" className="my-2 py-2 text-xl font-medium text-gray-700 hover:bg-hover-brand">
                                sign in to your account
                            </Link>
                            <button
                                type="button"
                                className="btn-primary w-full rounded-xl transition duration-500 hover:translate-y-1"
                                onClick={() => navigate("/dashboard")}
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default NavBar;
