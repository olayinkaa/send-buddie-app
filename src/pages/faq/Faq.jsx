import React from "react";
import { SendBuddieAccordion } from "@/components/@ui-kits";
import FAQ from "./data";

function Faq() {
    return (
        <section className="container mx-auto px-5 pt-5 pb-10 dark:text-light-heading">
            <h1 className="text-4xl font-medium">Frequently Asked Question</h1>
            <section className="mt-8 flex flex-col lg:flex-row gap-10 ">
                <div className="flex flex-col order-2 lg:order-none w-full lg:w-3/5 gap-10">
                    <div>
                        <h2 className="px-4 text-2xl font-medium pb-5">General</h2>
                        <SendBuddieAccordion data={FAQ.general} />
                    </div>
                    <div>
                        <h2 className="px-4 text-2xl font-medium pb-5">Account</h2>
                        <SendBuddieAccordion data={FAQ.account} />
                    </div>
                    <div>
                        <h2 className="px-4 text-2xl font-medium pb-5">Sending Money</h2>
                        <SendBuddieAccordion data={FAQ.sendingMoney} />
                    </div>
                </div>
                <div className="w-full lg:w-2/5 order-1 lg:order-none self-start border-2 border-slate-200 bg-gray-100 p-10 dark:bg-dark-brand">
                    <ul className="flex list-[square] flex-col space-y-3 text-lg">
                        <li>
                            <a href="#0">General</a>
                        </li>{" "}
                        <li>
                            <a href="#0">Sending Money</a>
                        </li>{" "}
                        <li>
                            <a href="#0">Receiving Money</a>
                        </li>{" "}
                        <li>
                            <a href="#0">Airtime top-up and Bill payments</a>
                        </li>{" "}
                        <li>
                            <a href="#0">Security and Privacy</a>
                        </li>{" "}
                        <li>
                            <a href="#0">Troubleshooting</a>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

export default Faq;
