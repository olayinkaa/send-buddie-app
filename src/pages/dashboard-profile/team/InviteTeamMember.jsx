import { useState } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";

const { Label, Option } = RadioGroup;

const roles = [
    { id: 1, name: "Admin", title: "Admin" },
    { id: 2, name: "Bookkeeper", title: "Book Keeper" },
    { id: 3, name: "Custom", title: "Custom" },
];

const roleDescription = (role) => {
    let descripton = "";
    switch (role) {
        case "Admin":
            descripton = `An Admin is an account signatory, has full access to all accounts, security settings, and team
            management`;
            break;
        case "Bookkeeper":
            descripton = `A Bookkeeper can view all accounts and transactions but can't move money.`;
            break;
        case "Custom":
            descripton = `Custom users can view all accounts but cannot access security or manage the team`;
            break;
        default:
            break;
    }
    return descripton;
};

export default function InviteTeamMember() {
    const [role, setRole] = useState("Admin");

    return (
        <div className="w-2/5">
            <Link to="/profile/team" className="flex gap-4 items-center">
                <button type="button">
                    <HiArrowNarrowLeft fontSize={30} />
                </button>
                <h4 className="text-xl font-normal">Invite a Team Member</h4>
            </Link>
            <form action="" className="flex flex-col gap-5 mt-12">
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
                </section>
                <div className="mt-2">
                    <RadioGroup value={role} onChange={setRole}>
                        <Label>Role</Label>
                        <div className="flex justify-between mt-5">
                            {roles.map((item) => (
                                <Option key={item.id} value={item.name}>
                                    {({ checked }) => (
                                        <span
                                            className={`bg-gray-200/60 px-10 py-3 rounded-md hover:cursor-pointer ${
                                                checked && "text-blue-500 !bg-blue-100/50"
                                            } `}
                                        >
                                            {item.title}
                                        </span>
                                    )}
                                </Option>
                            ))}
                        </div>
                    </RadioGroup>
                </div>
                <p className="pt-2 text-justify">{roleDescription(role)}</p>
                <div className="flex justify-between pt-5">
                    <button type="button" className="bg-blue-100/50 px-20 py-5 rounded-lg text-blue-500">Cancel</button>
                    <button type="button" className="bg-blue-600 px-16 py-5 rounded-lg text-white">Send invite</button>
                </div>
            </form>
        </div>
    );
}
