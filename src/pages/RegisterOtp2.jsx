/* eslint-disable react/no-unescaped-entities */
import React from "react";
import registerHero from "../assets/images/sidebar-hero.svg";

// TODO: not in use
function RegisterOtp2() {
    return (
        <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-3">
            {/* <div className="col-span-1 flex h-full w-full flex-col items-center justify-center space-y-6 bg-blue-brand pt-14 md:space-y-20">
                <a href="#0" className="ml-20  flex items-center self-start">
                    <img src="./assets/images/logo.png" alt="" className="w-[52px]" />
                    <span className="text-4xl font-bold text-white">SendBuddie</span>
                </a>
                <div className="">
                    <img src={registerHero} alt="" className="w-[400px] md:w-[500px]" />
                </div>
            </div> */}
            <div className="col-span-1 flex h-full w-full flex-col items-center justify-center space-y-6 bg-blue-brand pt-14 md:space-y-20">
                <a href="#0" className="ml-20  flex items-center self-start">
                    <img src="./assets/images/logo.png" alt="" className="w-[52px]" />
                    <span className="text-4xl font-bold text-white">SendBuddie</span>
                </a>
                <div className=" ml-20 self-start">
                    <span className="mr-3 text-4xl text-white md:text-5xl">Create</span>
                    <span className="text-4xl md:text-5xl">multiple</span> <br />
                    <span className="mt-4 block text-4xl text-white md:text-5xl">wallets</span>
                </div>
                <div className="">
                    <img src={registerHero} alt="" className="w-[400px] md:w-[700px]" />
                </div>
            </div>
            <div className="lg:primary-container col-span-2 flex items-start justify-center pt-8 md:pt-60">
                <div className="flex w-full flex-col items-center space-y-8 rounded-lg p-16 md:w-3/5">
                    <p className="text-center text-3xl font-normal">
                        Please enter the OTP sent to your email to begin using your account. Your account has been
                    </p>
                    <div className="mt-4 flex flex-row gap-3">
                        <input
                            type="text"
                            className="h-16 w-16 border-0 border-b-2 border-gray-400 text-center text-lg focus:border-gray-400 focus:ring-0"
                            name=""
                            id=""
                        />{" "}
                        <input
                            type="text"
                            className="h-16 w-16 border-0 border-b-2 border-gray-400 text-center text-lg focus:border-gray-400 focus:ring-0"
                            name=""
                            id=""
                        />{" "}
                        <input
                            type="text"
                            className="h-16 w-16 border-0 border-b-2 border-gray-400 text-center text-lg focus:border-gray-400 focus:ring-0"
                            name=""
                            id=""
                        />{" "}
                        <input
                            type="text"
                            className="h-16 w-16 border-0 border-b-2 border-gray-400 text-center text-lg focus:border-gray-400 focus:ring-0"
                            name=""
                            id=""
                        />
                    </div>
                    <p className="w-3/5 text-center font-medium">
                        Email has been resent, please check your email and verify to start using your account{" "}
                    </p>
                    <a href="#0" className="text-lg underline">
                        Didn't receive any mail ? <span className="text-blue-600/95">send again</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RegisterOtp2;
