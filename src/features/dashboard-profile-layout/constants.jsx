import { HiOutlineLibrary, HiCreditCard, HiUserGroup } from "react-icons/hi";
import { RiUserLine, RiLockPasswordLine } from "react-icons/ri";

const PROFILE_LINKS = [
    {
        key: "personal-information",
        label: "Account Information",
        path: "/profile",
        icon: <HiOutlineLibrary fontSize={20} />,
    },
    {
        key: "bank-cards",
        label: "Bank & Cards",
        path: "/profile/bank-and-card",
        icon: <HiCreditCard fontSize={20} />,
    },
    {
        key: "kyc-submission",
        label: "KYC Submission",
        path: "/profile/kyc-submission",
        icon: <RiUserLine fontSize={20} />,
    },
    {
        key: "security",
        label: "Login & Security",
        path: "/profile/security",
        icon: <RiLockPasswordLine fontSize={20} />,
    },
    {
        key: "team",
        label: "Team",
        path: "/profile/team",
        icon: <HiUserGroup fontSize={20} />,
    },
];

export default PROFILE_LINKS;
