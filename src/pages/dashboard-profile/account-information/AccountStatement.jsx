import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SendBuddieButton } from "../../../components";

export default function AccountStatement() {
    return (
        <div className="space-y-8 w-2/5">
            <div className="space-y-2">
                <Link to="/profile" className="flex gap-4 items-center">
                    <button type="button">
                        <HiArrowNarrowLeft fontSize={30} />
                    </button>
                    <h4 className="text-xl font-normal">Account Statement</h4>
                </Link>
                <p className="text-lg text-gray-500">Choose a timeframe for your statement and select a format you want in</p>
            </div>
            <form action="" className="flex flex-col gap-5">
                <section className="flex flex-col gap-y-1">
                    <label htmlFor="" className="text-gray-500">
                        Enter current password
                    </label>
                    <input
                        type="text"
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </section>
                <section className="flex flex-col gap-y-1">
                    <label htmlFor="" className="text-gray-500">
                        Enter new password
                    </label>
                    <input
                        type="text"
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </section>
                <section className="flex flex-col gap-y-1">
                    <label htmlFor="" className="text-gray-500">
                        Confirm new password
                    </label>
                    <input
                        type="text"
                        className="border-1 rounded-md border-neutral-300 py-3 focus:border-0 focus:ring-1 focus:ring-blue-brand"
                    />
                </section>
                <SendBuddieButton title="Generate Statement" />
            </form>
        </div>
    );
}
