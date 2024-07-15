/* eslint-disable react/prop-types */
import { FaBars } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { useState } from "react";
import clsx from "classnames";
import { useLocation } from "react-router-dom";
// import { useAuth } from "../hooks";
import { DASHBOARD_SIDEBAR_LINKS } from "./constants";
import { StyledLink } from "./style";
import InviteFriends from "./InviteFriends";

export default function SideBar() {
    const [open, setOpen] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => setOpenModal(false);
    const handleOpenModal = () => setOpenModal(true);
    // const { dispatch, logout } = useAuth();

    return (
        <>
            <div
                className={`flex h-full ${
                    open ? "w-64" : "w-28"
                } flex-col border-r border-neutral-200 bg-white/100 px-2 pt-5`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <img src="./assets/images/logo.png" alt="" width="42px" />
                        <span className="text-lg font-bold dark:text-light-heading">SendBuddie</span>
                    </div>
                    <div className="">
                        <FaBars className="cursor-pointer text-lg" onClick={() => setOpen(!open)} />
                    </div>
                </div>
                <div className="flex flex-1 flex-col gap-0.5 py-8 flex-wrap">
                    {DASHBOARD_SIDEBAR_LINKS.filter((item) => item.position === "top").map((link) => {
                        return <SidebarLink key={link.key} link={link} />;
                    })}
                </div>{" "}
                {/* bottom side menu */}
                {/* <div className="flex flex-col gap-0.5 border-t border-neutral-300 py-2"> */}
                <div className="flex flex-col gap-0.5 py-2">
                    {DASHBOARD_SIDEBAR_LINKS.filter((item) => item.position === "bottom").map((link) => {
                        return <SidebarLink key={link.key} link={link} />;
                    })}
                </div>
                <div className="flex items-center pb-4">
                    <button onClick={handleOpenModal} type="button" className="btn-primary flex w-full items-center gap-2 py-2">
                        <MdCardGiftcard />
                        <span>Get Referral Code</span>
                    </button>
                </div>
            </div>
            {openModal && (
                <InviteFriends
                    isOpen={openModal}
                    handleClose={handleCloseModal}
                />
            )}
        </>
    );
}

function SidebarLink({ link }) {
    const { pathname } = useLocation();
    const currentPath = pathname.split("/").slice(1).includes(link.path.split("/").slice(1)[0]);
    const baseClass = clsx({
        "text-blue-brand": currentPath,
    });
    return (
        <StyledLink to={link.path} className={baseClass}>
            <span className="text-xl">{link.icon}</span>
            <span>{link.label}</span>
        </StyledLink>
    );
}
