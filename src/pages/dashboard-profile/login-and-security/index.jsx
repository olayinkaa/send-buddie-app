import React from "react";
import { HiChevronRight} from "react-icons/hi";
import { Link } from "react-router-dom";

export default function LoginAndSecurity() {
    return (
        <div className="space-y-6 w-2/5">
            <h4 className="text-xl">Login & Security</h4>
            <Link
                to="/profile/change-password"
                className="
                    flex items-center justify-between transition duration-1000 
                    hover:translate-x-1 hover:text-blue-brand"
            >
                <span>Update password</span>
                <HiChevronRight fontSize={20} />
            </Link>
            <Link
                to="/profile/transaction-pin"
                className="
                    flex items-center justify-between transition duration-1000 
                    hover:translate-x-1 hover:text-blue-brand"
            >
                <span>Update transaction PIN</span>
                <HiChevronRight fontSize={20} />
            </Link>
            <Link
                to="/profile/notification"
                className="
                    flex items-center justify-between transition duration-1000 
                    hover:translate-x-1 hover:text-blue-brand"
            >
                <span>Notification</span>
                <HiChevronRight fontSize={20} />
            </Link>
        </div>
    );
}
