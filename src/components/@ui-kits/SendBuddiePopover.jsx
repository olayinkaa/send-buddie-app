/* eslint-disable react/prop-types */
import { Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import clsx from "clsx";
import cn from "@/utils/tailwind-merge";
// import ctl from "@netlify/classnames-template-literals";

export default function SendBuddiePopover({ children }) {
    return (
        <Menu as="div" className="relative inline-block text-left">
            {children}
        </Menu>
    );
}

function PopoverButton({ children, className }) {
    return <Menu.Button className={cn("inline-flex", className)}>{children}</Menu.Button>;
}

function PopoverMenuItems({ className, width, children }) {
    const menuItemClasses = clsx(
        "origin-top-right divide-y",
        "divide-gray-100 rounded-md bg-white",
        "ring-1 ring-black ring-opacity-5",
        "shadow-lg focus:outline-none",
        `absolute w-${width}`,
    );

    return (
        <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items className={cn(menuItemClasses, className)}>
                <div className="px-1 py-1">{children}</div>
            </Menu.Items>
        </Transition>
    );
}

function PopoverMenuItem({ className, onClick = undefined, children, ...props }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <button
                    {...props}
                    type="button"
                    onClick={onClick}
                    className={cn(
                        "group flex w-full items-center",
                        " rounded-md px-2 py-2",
                        "text-sm text-gray-900",
                        active && "bg-hover-brand",
                        className,
                    )}
                >
                    {children}
                </button>
            )}
        </Menu.Item>
    );
}
SendBuddiePopover.Button = PopoverButton;
SendBuddiePopover.Menu = PopoverMenuItems;
SendBuddiePopover.Item = PopoverMenuItem;
