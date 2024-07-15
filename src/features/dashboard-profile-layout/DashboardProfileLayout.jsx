/* eslint-disable react/prop-types */
import { HiChevronRight } from "react-icons/hi";
import { MdHelpOutline, MdLogout } from "react-icons/md";
import { Outlet, useLocation } from "react-router-dom";
import clsx from "classnames";
import _ from "lodash";
import PROFILE_LINKS from "./constants";
import { useAuth } from "../../hooks";
import { getFirstCharacter } from "../../utils/helpers";
import { StyledButton, StyledLink } from "./styles";

export default function DashboardProfileLayout() {
    const { authState, dispatch, logout } = useAuth();
    const { user, role } = authState;
    return (
        <main className="mt-10 flex h-full gap-6">
            <section className="flex w-3/12 flex-col border-r border-neutral-300">
                <section className="flex flex-1 flex-col items-center justify-center border-b border-t-0 space-y-2">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple-400">
                        <span className="text-2xl text-white">{getFirstCharacter(user?.accountName)}</span>
                    </div>
                    <h2 className="text-lg font-medium capitalize">
                        <span>{user?.accountName}</span>
                    </h2>
                    <p className="text-gray-400 capitalize">{_.capitalize(role)}</p>
                </section>
                <section className="flex-2">
                    <section className="flex flex-col gap-7 px-6 py-5">
                        <h3 className="text-center">Account Services</h3>
                        {/* 1 */}
                        {PROFILE_LINKS.map((link) => {
                            return <ProfileSidebarLinks key={link.key} link={link} />;
                        })}
                    </section>
                    <hr />
                    <section className="flex flex-col gap-4 px-6 pt-5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center justify-between gap-3">
                                <MdHelpOutline fontSize={20} />
                                <span>Help & Support</span>
                            </div>
                            <HiChevronRight fontSize={20} />
                        </div>
                    </section>{" "}
                    <section className="flex flex-col gap-4 px-6 pt-5">
                        <StyledButton type="button" onClick={() => dispatch(logout())}>
                            <div className="flex items-center justify-between gap-3">
                                <MdLogout fontSize={20} />
                                <span>Logout</span>
                            </div>
                            <HiChevronRight fontSize={20} />
                        </StyledButton>
                    </section>
                </section>
            </section>
            <section className="w-9/12 p-3">
                <Outlet />
            </section>
        </main>
    );
}

function ProfileSidebarLinks({ link }) {
    const { pathname } = useLocation();
    // const currentPath = pathname.split("/").slice(1).includes(link.path.split("/").slice(1)[0]);
    const baseClass = clsx({
        "text-blue-brand": pathname === link.path,
    });
    return (
        <StyledLink to={link.path} className={baseClass}>
            <div className="flex items-center justify-between gap-3">
                {link.icon}
                <span>{link.label}</span>
            </div>
            <HiChevronRight fontSize={20} />
        </StyledLink>
    );
}
