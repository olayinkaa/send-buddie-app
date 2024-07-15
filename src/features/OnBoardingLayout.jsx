import { Link, Outlet } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import registerHero from "../assets/images/sidebar-hero.svg";
import useAuth from "../hooks/useAuth";

function OnBoardingLayout() {
    const {
        authState: { isAuthenticated },
        logout,
        dispatch,
    } = useAuth();

    return (
        <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-3">
            <div
                className="
                flex h-full w-full flex-col items-center space-y-6 bg-blue-brand 
                dark:border-r-2 dark:border-slate-900 dark:bg-dark-brand md:space-y-20"
            >
                <Link to="/signup-option" className="ml-20 mt-10 flex items-center self-start md:mt-36">
                    <img src="./assets/images/logo.png" alt="" className="w-[52px]" />
                    <span className="text-4xl font-bold text-white">SendBuddie</span>
                </Link>
                <LazyLoadImage
                    alt="welcome-profile"
                    src={registerHero}
                    placeholderSrc={registerHero}
                    effect="blur"
                    className="hidden w-[400px] object-cover p-10 mix-blend-normal lg:!flex md:w-[600px]"
                />
                {isAuthenticated ? (
                    <div className="flex flex-1 items-center justify-center text-white">
                        <button
                            type="button"
                            className="hover:text-red-400 hover:underline"
                            onClick={() => dispatch(logout())}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="ml-24 flex gap-5 self-start text-white">
                        <span>Terms and Condition</span>
                        <span>Privacy Policy</span>
                    </div>
                )}
            </div>
            <Outlet />
        </div>
    );
}

export default OnBoardingLayout;
