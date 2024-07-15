import { Link, useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import registerHero from "@/assets/images/sidebar-hero.svg";
import WelcomePersonalForm from "./personal/WelcomePersonalForm";
import useAuth from "../hooks/useAuth";
import WelcomeBusinessForm from "./business/WelcomeBusinessForm";
import { PERSONAL_ACCOUNT, BUSINESS_ACCOUNT } from "@/utils/constant";

export default function WelcomeProfile() {
    const navigate = useNavigate();
    const {
        authState: { isAuthenticated, profileUpdated, role },
        logout,
        dispatch,
    } = useAuth();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    useEffect(() => {
        if (isAuthenticated && profileUpdated) {
            navigate("/dashboard");
        }
    }, [isAuthenticated, profileUpdated, navigate]);

    const renderForm = useCallback(() => {
        switch (role) {
            case PERSONAL_ACCOUNT:
                return <WelcomePersonalForm />;
            case BUSINESS_ACCOUNT:
                return <WelcomeBusinessForm />;
            default:
                return null;
        }
    }, [role]);

    return (
        <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div
                className="
                flex h-full flex-col items-center bg-blue-brand 
                dark:border-r-2 dark:border-slate-900 dark:bg-dark-brand "
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
                    className="hidden w-[400px] object-cover p-10 mix-blend-normal md:!flex md:w-[600px]"
                />
                <div className="flex flex-1 items-center justify-center gap-5 text-white">
                    <button
                        type="button"
                        className="hover:text-red-400 hover:underline"
                        onClick={() => dispatch(logout())}
                    >
                        Logout
                    </button>
                </div>
            </div>
            {renderForm()}
        </div>
    );
}
