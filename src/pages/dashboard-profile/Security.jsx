import React from "react";

function Security() {
    return (
        <div className="space-y-10 w-2/5">
            <h4 className="text-center text-xl font-normal">Security</h4>
            <form className="space-y-4">
                <h4 className="text-lg font-normal">Change Password</h4>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-lg text-gray-500">
                        Enter current email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id=""
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-lg text-gray-500">
                        Enter new email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id=""
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-lg text-gray-500">
                        Confirm new email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id=""
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </div>
                <button type="button" className="w-full btn-primary mt-5 py-4">
                    Save
                </button>
            </form>
        </div>
    );
}

export default Security;
