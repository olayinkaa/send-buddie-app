/* eslint-disable import/prefer-default-export */
import { FaUser, FaCog } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { BiGroup } from "react-icons/bi";
// import { MdHelp } from "react-icons/md";
// import { IoSwapHorizontalOutline } from "react-icons/io5";
import { ImCreditCard } from "react-icons/im";

export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: "dashboard",
        label: "Dashboard",
        path: "/dashboard",
        icon: <HiViewGrid />,
        position: "top",
    },
    {
        key: "beneficiary",
        label: "Beneficiary",
        path: "/beneficiary",
        icon: <BiGroup />,
        position: "top",
    },
    // {
    //     key: "currency-swap",
    //     label: "Currency Swap",
    //     path: "/currency-swap",
    //     icon: <IoSwapHorizontalOutline />,
    //     position: "top",
    // },
    {
        key: "profile",
        label: "Profile",
        path: "/profile",
        icon: <FaUser />,
        position: "top",
    },
    {
        key: "transactions",
        label: "Transactions",
        path: "/transactions",
        icon: <ImCreditCard />,
        position: "top",
    },
    {
        key: "settings",
        label: "Settings",
        path: "/settings",
        icon: <FaCog />,
        position: "bottom",
    },
    // {
    //     key: "support",
    //     label: "Help & Support",
    //     path: "/support",
    //     icon: <MdHelp />,
    //     position: "bottom",
    // }
];
