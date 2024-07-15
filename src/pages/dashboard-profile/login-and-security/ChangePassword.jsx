import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { SendBuddieButton } from "@/components";

export default function ChangePassword() {
    return (
        <div className="space-y-5 w-2/5">
            <Link to="/profile/security" className="flex gap-4 items-center">
                <button type="button">
                    <HiArrowNarrowLeft fontSize={30} />
                </button>
                <h4 className="text-xl font-normal">Change Password</h4>
            </Link>
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
                <SendBuddieButton title="save"/>
            </form>
        </div>
    );
}
