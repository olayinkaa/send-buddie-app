import Gravatar from "react-gravatar";
import { beneficiaryType } from "../utils";

export default function BeneficiaryCard({ beneficiary }) {
    return (
        <div key={beneficiary.uuid} className="flex flex-col items-center rounded-xl border border-neutral-200 p-4">
            {/* <img src={person1} alt="person" className="h-14 w-14" /> */}
            {/* <SendBuddiePlaceholder /> */}
            <Gravatar email={beneficiary.email} className="rounded-full" default="identicon" protocol="https://" />
            <span className="mt-1">{beneficiary.lastName}</span>
            <span>{beneficiary.firstName}</span>
            <span className=" text-gray-500">{beneficiaryType(beneficiary.beneficiaryType)}</span>
        </div>
    );
}
