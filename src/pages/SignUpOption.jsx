import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BusinessAccountSvg from "../assets/images/BusinessAccountSvg";
import PersonalAccountSvg from "../assets/images/PersonalAccountSvg";

const options = [
    {
        title: "Business Account",
        description: "create an account",
        icon: <BusinessAccountSvg />,
        slug: "BUSINESS",
    },
    {
        title: "Personal Account",
        description: "create an account",
        icon: <PersonalAccountSvg />,
        slug: "PERSONAL",
    },
];

function SignUpOption() {
    const navigate = useNavigate();
    const goToRegister = (slug) => {
        navigate("/register-account", {
            state: {
                accountType: slug,
            },
        });
    };

    return (
        <div className="min-h-screen w-screen overflow-hidden dark:bg-algolia dark:text-sendbuddie-light">
            <div className="container mx-auto mt-40 flex flex-col items-center justify-center ">
                <a href="#0" className="flex items-center ">
                    {/* TODO: change the image url to import base */}
                    <img src="./assets/images/logo.png" alt="" width="52px" className="" />
                    <Link to="/" className="text-2xl font-bold ">
                        SendBuddie
                    </Link>
                </a>
                <h5 className="mt-24 text-2xl font-semibold">Welcome to SendBuddie, How do you want to sign up?</h5>
                <div className="mt-8 grid grid-cols-2 gap-3">
                    {options.map((item) => {
                        return (
                            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                            <div
                                role="button"
                                tabIndex={item.slug}
                                key={item.title}
                                className="
                                group flex flex-col items-center space-y-3 rounded-md
                                border-2 border-gray-300 p-10 pb-16 dark:border-slate-500
                                transition duration-1000 hover:translate-y-2 hover:cursor-pointer hover:bg-gray-50"
                                onClick={() => goToRegister(item.slug)}
                            >
                                <div className="transition duration-1000 group-hover:scale-75 dark:bg-transparent">
                                    {item.icon}
                                </div>
                                <h5 className="text-2xl font-medium">{item.title}</h5>
                                <p className="text-base text-gray-400">{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SignUpOption;
