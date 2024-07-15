import React from "react";
import { HiChevronRight, HiOutlineNewspaper, HiOutlineUser, HiOutlineCreditCard } from "react-icons/hi";
import { Link } from "react-router-dom";

export default function AccountInformation() {
    return (
        <div className="space-y-6 w-2/5">
            <h4 className="text-xl">Account Information</h4>
            <Link
                to="/profile/account-information"
                className="
                    flex items-center justify-between transition duration-1000 
                    hover:translate-x-1 hover:text-blue-brand"
            >
                <div className="flex items-center justify-between gap-2">
                    <HiOutlineUser fontSize={20} />
                    <span>Profile</span>
                </div>
                <HiChevronRight fontSize={20} />
            </Link>
            <Link
                to="/profile/account-limits"
                className="
                    flex items-center justify-between transition duration-1000 
                    hover:translate-x-1 hover:text-blue-brand"
            >
                <div className="flex items-center justify-between gap-3">
                    <HiOutlineNewspaper fontSize={20} />
                    <span>Account Limits</span>
                </div>
                <HiChevronRight fontSize={20} />
            </Link>
            <Link
                to="/profile/account-statement"
                className="
                    flex items-center justify-between transition duration-1000 
                    hover:translate-x-1 hover:text-blue-brand"
            >
                <div className="flex items-center justify-between gap-3">
                    <HiOutlineCreditCard fontSize={20} />
                    <span>Account Statement</span>
                </div>
                <HiChevronRight fontSize={20} />
            </Link>
        </div>
    );
}
