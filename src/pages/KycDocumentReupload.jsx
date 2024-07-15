import React from "react";
import registerHero from "../assets/images/sidebar-hero.svg";
import FileUploadSvg from "../assets/images/FileUploadSvg";
// import SideBarHero from './../assets/images/SideBarHero';
const kycDocuments = [
    {
        id: 1,
        title: "Certificate of Incorporation & Business registration",
    },
    {
        id: 2,
        title: "Memorandum & Articles of association",
    },
    {
        id: 3,
        title: "Ownership & control structure",
    },
    {
        id: 4,
        title: "Proof of registered office & business address",
    },
    {
        id: 5,
        title: "Additional documents",
    },
];

function KycDocumentReupload() {
    return (
        <div className="grid min-h-screen w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div
                className="
                flex h-full w-full flex-col items-center space-y-6 bg-blue-brand 
                dark:border-r-2 dark:border-slate-900 dark:bg-dark-brand md:space-y-20"
            >
                <a href="#0" className="ml-20 mt-10 flex items-center self-start md:mt-36">
                    <img src="./assets/images/logo.png" alt="" className="w-[52px]" />
                    <span className="text-4xl font-bold text-white">SendBuddie</span>
                </a>
                <img
                    src={registerHero}
                    alt=""
                    className="w-[400px] object-cover p-10 mix-blend-normal md:flex md:w-[600px]"
                />
                <div className="ml-24 flex gap-5 self-start text-white">
                    <span>Terms and Condition</span>
                    <span>Privacy Policy</span>
                </div>
            </div>
            <div
                className="
                    primary-light-container dark:primary-dark-container col-span-1 
                    flex items-center justify-center bg-[center_top_700px] p-8
                    dark:bg-dark-brand lg:col-span-2
                "
            >
                <div className="flex w-5/6 flex-col rounded-xl border-2 border-gray-200 p-8 md:w-full lg:w-4/6 xl:w-2/5 ">
                    <h2 className="mb-6 text-2xl text-slate-900 dark:text-white">Submit KYC documents</h2>
                    <div className="flex flex-col gap-y-10">
                        {kycDocuments.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className="
                                    inline-flex items-start gap-4 bg-gray-brand p-3 
                                    outline-dashed outline-2 outline-offset-2 outline-outline-brand"
                                >
                                    <FileUploadSvg />
                                    <div>
                                        <h4 className="text-base font-medium">{item.title}</h4>
                                        <input
                                            type="file"
                                            className="
                                            inline
                                            file:cursor-pointer
                                            file:border-0
                                            file:bg-transparent
                                            file:text-blue-brand
                                            file:underline
                                            "
                                        />
                                    </div>
                                </div>
                            );
                        })}
                        <div>
                            <button type="button" className="btn-primary w-full">
                                Complete sign up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KycDocumentReupload;
