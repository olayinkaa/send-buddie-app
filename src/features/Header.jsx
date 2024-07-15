import { useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { FaUser, FaCog } from "react-icons/fa";
import { MdLogout, MdNavigateBefore } from "react-icons/md";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useDarkmode } from "@/hooks";
import { SendBuddiePopover } from "@/components/@ui-kits";
import useAuth from "@/hooks/useAuth";
import { getFirstCharacter } from "@/utils";

function DropDown({ name }) {
    return (
        <>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ceccff]">
                <span className="text-[#5f5fff]">{getFirstCharacter(name)}</span>
            </div>
            <ChevronDownIcon className="ml-2 -mr-1 h-5 w-5 self-center " aria-hidden="true" />
        </>
    );
}

const { Menu, Item, Button } = SendBuddiePopover;

function Header() {
    const { theme, handleThemeSwitch } = useDarkmode();
    const navigate = useNavigate();
    const location = useLocation();
    const { dispatch, logout, authState } = useAuth();
    const changeThemeMode = (e) => {
        e.preventDefault();
        handleThemeSwitch();
    };

    const getPathname = useCallback(() => {
        const path = location?.pathname?.split("/")[1];
        switch (path) {
            case "dashboard":
                return "Dashboard";
            case "beneficiary":
                return "Beneficiary";
            case "profile":
                return "Profile";
            case "transactions":
                return "Transactions";
            case "open-wallet":
                return "Wallet";
            default:
                return "";
        }
    }, [location?.pathname]);

    return (
        // TODO: add h-12, border-b to below div if necessary later
        <div
            className="
            sticky top-0 flex w-full items-center justify-between border-b
            border-gray-100 bg-white px-10 pt-2 pb-3
            dark:bg-dark-brand dark:text-white"
        >
            <div className="relative hidden">
                <HiOutlineSearch fontSize={20} className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" />
                <div>
                    <input
                        type="text"
                        placeholder="search..."
                        className="
                            border border-gray-300 pl-11 text-sm ring-0 
                            focus:outline-none focus:ring-0 active:outline-none"
                    />
                </div>
            </div>
            <div>
                <Link to="/" className="flex items-center gap-1">
                    <MdNavigateBefore fontSize={30} className="text-red-500" />
                    <span>Back</span>
                </Link>
            </div>
            <div>
                <span className="text-lg font-medium">{getPathname()}</span>
            </div>
            <div className="flex items-center gap-2">
                <button type="button" className="text-lg" onClick={changeThemeMode}>
                    {theme === "dark" ? (
                        <HiOutlineSun className="mr-5 dark:text-light-heading" />
                    ) : (
                        <HiOutlineMoon className="mr-5 text-blue-brand" />
                    )}
                </button>
                <SendBuddiePopover>
                    <Button>
                        <DropDown name={authState.user.accountName} />
                    </Button>
                    <Menu width={56} className="right-0 mt-2 w-56">
                        <Item onClick={() => navigate("/profile")}>
                            <FaUser className="mr-2" />
                            <span>Profile</span>
                        </Item>
                        <Item onClick={() => dispatch(logout())}>
                            <FaCog className="mr-2" />
                            <span>Settings</span>
                        </Item>{" "}
                        <Item onClick={() => dispatch(logout())}>
                            <MdLogout className="mr-2" />
                            <span>Logout</span>
                        </Item>
                    </Menu>
                </SendBuddiePopover>
            </div>
        </div>
    );
}

export default Header;
