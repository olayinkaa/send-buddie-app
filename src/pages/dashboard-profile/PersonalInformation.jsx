import {SendBuddieButton} from "../../components";

function PersonalInformation() {
    return (
        <div className="space-y-10 w-2/5">
            <h4 className="text-center text-xl font-normal">Personal Information</h4>
            <form action="" className="flex flex-col gap-5">
                <section className="flex w-full gap-3">
                    <div className="flex w-1/2 flex-col">
                        <label htmlFor="firstName" className="text-gray-500">
                            First name
                        </label>
                        <input
                            type="text"
                            className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                        />
                    </div>
                    <div className="flex w-1/2 flex-col">
                        <label htmlFor="lastName" className="text-gray-500">
                            Last name
                        </label>
                        <input
                            type="text"
                            className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                        />
                    </div>
                </section>
                <section className="flex flex-col">
                    <label htmlFor="" className="text-gray-500">
                        Email
                    </label>
                    <input
                        type="text"
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </section>{" "}
                <section className="flex flex-col">
                    <label htmlFor="" className="text-gray-500">
                        Country
                    </label>
                    <select
                        name="country"
                        id=""
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    >
                        <option value="NGN">Nigeria</option>
                        <option value="NGN">USA</option>
                        <option value="NGN">Canada</option>
                    </select>
                </section>
                <section className="flex flex-col">
                    <label htmlFor="" className="text-gray-500">
                        Address
                    </label>
                    <input
                        type="text"
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </section>{" "}
                <section className="flex flex-col">
                    <label htmlFor="" className="text-gray-500">
                        Phone number
                    </label>
                    <input
                        type="text"
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </section>{" "}
                <SendBuddieButton />
            </form>
        </div>
    );
}

export default PersonalInformation;
