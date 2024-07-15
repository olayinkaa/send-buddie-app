import React from "react";
import registerHero from "../assets/images/sidebar-hero.svg";
// import SideBarHero from './../assets/images/SideBarHero';

function RegisterCorporateSuccess() {
    return (
        <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div
                className="
                flex h-full w-full flex-col items-center space-y-6 bg-blue-brand 
                dark:border-r-2 dark:border-slate-900 dark:bg-dark-brand md:space-y-20"
            >
                <a href="#0" className="ml-20 mt-36 flex items-center self-start">
                    <img src="./assets/images/logo.png" alt="" className="w-[52px]" />
                    <span className="text-4xl font-bold text-white">SendBuddie</span>
                </a>
                <img src={registerHero} alt="" className="w-[400px] object-cover p-10 mix-blend-normal md:w-[600px]" />
                <div className="ml-24 flex gap-5 self-start text-white">
                    <span>Terms and Condition</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
            <div
                className="
                    primary-light-container dark:primary-dark-container 
                    col-span-1 flex items-start justify-center pt-8
                    dark:bg-dark-brand md:pt-60 lg:col-span-2
                "
            >
                <div className="flex w-full flex-col items-center gap-4 p-8 lg:w-4/5 xl:w-2/5">
                    <img src="./assets/svgs/success-icon2.svg" className="w-[100px] animate-pulse" alt="" />
                    <h5 className="text-center text-2xl font-medium dark:text-white">
                        KYC documents have been successfully submitted and currently undergoing compliance review.
                    </h5>
                    <button
                        disabled
                        type="button"
                        className=" mt-5 block w-full rounded-lg bg-blue-brand px-5 py-3 text-white hover:cursor-pointer md:w-4/5"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RegisterCorporateSuccess;
