import React from "react";

function Receipt() {
    return (
        <div className="flex min-h-screen w-screen justify-center overflow-hidden dark:bg-dark-brand">
            <div className="mt-10 h-full w-2/6 rounded-md border-2 border-gray-200 py-4 px-10 shadow-md">
                <h2 className="mb-14 text-center text-4xl font-bold dark:text-slate-100">LOGO</h2>
                <section className="divid-gray divide-y-2">
                    <section className="flex justify-between py-3">
                        <span className="text-2xl font-medium dark:text-slate-100">Bancoremit</span>
                        <span className="text-2xl font-medium text-gray-400">$ 400</span>
                    </section>{" "}
                    <section className="flex justify-between py-3">
                        <div className="flex flex-col gap-y-3">
                            <span className="text-xl text-gray-500 dark:text-slate-100">Payment Method</span>
                            <span className="text-lg font-medium text-gray-400">Bank Deposit</span>
                        </div>
                        <div className="flex flex-col items-end gap-y-3">
                            <span className="text-xl text-gray-500 dark:text-slate-100">Transaction ID</span>
                            <span className="text-lg font-medium text-gray-400">Fsv0-rbbrar-b35ve-t53k</span>
                        </div>
                    </section>{" "}
                    <section className="flex justify-between py-3">
                        <div className="flex flex-col gap-y-3">
                            <span className="text-xl text-gray-500 dark:text-slate-100">Recipient amount</span>
                            <span className="text-lg font-medium text-gray-400">$399</span>
                        </div>
                        <div className="flex flex-col items-end gap-y-3">
                            <span className="text-xl text-gray-500 dark:text-slate-100">Fees</span>
                            <span className="text-lg font-medium text-gray-400">$0.00</span>
                        </div>
                    </section>{" "}
                    <section className="flex justify-between py-3">
                        <span className="text-xl font-medium dark:text-slate-100">Rate</span>
                        <span className="text-lg font-medium text-gray-400">1 USD = 408 NGN</span>
                    </section>{" "}
                    <section className="flex justify-between py-3">
                        <div className="flex flex-col gap-y-3">
                            <span className="text-xl text-gray-500 dark:text-slate-100">Account name</span>
                            <span className="text-lg font-medium text-gray-400">OHENTPAY UK LTD</span>
                        </div>
                        <div className="flex flex-col items-end gap-y-3">
                            <span className="text-xl text-gray-500 dark:text-slate-100">Ref Number</span>
                            <span className="text-lg font-medium text-gray-400">BNr9rvBBL8</span>
                        </div>
                    </section>{" "}
                    <section className="flex justify-between py-3">
                        <div className="flex flex-col gap-y-3">
                            <span className="text-xl text-gray-500 dark:text-slate-100">Financial Institution</span>
                            <span className="text-lg font-medium text-gray-400">Bancoremit</span>
                        </div>
                        <div className="flex flex-col items-end gap-y-3">
                            <span className="text-xl text-gray-500 dark:text-slate-100">Ref Number</span>
                            <span className="text-lg font-medium text-gray-400">BNr9rvBBL8</span>
                        </div>
                    </section>{" "}
                    <section className="flex flex-col items-center space-y-4 p-10">
                        <span className="text-lg text-gray-400">goPos: 1.0.0</span>
                        <span className="text-lg text-gray-400">PTS;P: SendBuddie</span>
                        <span className="text-lg text-gray-400">suppport@SendBuddie.com</span>
                        <span className="text-lg text-gray-400">09087777715 </span>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default Receipt;
