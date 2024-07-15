/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback } from "react";
import { BsXCircle } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi2";

const getSize = (size) => {
    switch (size) {
        case "sm":
            return "max-w-sm";
        case "md":
            return "max-w-md";
        case "lg":
            return "max-w-lg";
        case "xl":
            return "max-w-xl";
        case "xxl":
            return "max-w-2xl";
        case "xxxl":
            return "max-w-3xl";
        default:
            return " max-w-md";
    }
};

export default function SendBuddieModal({
    isOpen,
    closeModal,
    goBack,
    title,
    size,
    backdrop,
    opacity,
    hasBackArrow,
    children,
}) {
    const hasBackdrop = useCallback(() => {
        if (backdrop) {
            closeModal();
            return false;
        }
        return false;
    }, [backdrop, closeModal]);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={hasBackdrop}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    {/* bg-opacity controls the background backdrop density/opacity */}
                    <div className={`fixed inset-0 bg-black bg-opacity-${opacity}`} />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    {/* items-start, items-center controls the position of the modal */}
                    <div className="flex min-h-full items-center justify-center px-10 py-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            {/*  max-w-md, controls the width size */}
                            <Dialog.Panel
                                className={`w-full ${getSize(
                                    size,
                                )} transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all`}
                            >
                                {title && (
                                    <>
                                        <Dialog.Title as="h3" className="flex items-center justify-between px-6 py-3">
                                            {hasBackArrow && (
                                                <div>
                                                    <HiArrowLeft
                                                        fontSize={25}
                                                        className="cursor-pointer"
                                                        onClick={goBack}
                                                    />
                                                </div>
                                            )}
                                            <h1 className="flex-1 text-center text-xl font-medium">{title}</h1>
                                            <span>
                                                <BsXCircle
                                                    fontSize={25}
                                                    className="cursor-pointer"
                                                    onClick={closeModal}
                                                />
                                            </span>
                                        </Dialog.Title>
                                        <hr />
                                    </>
                                )}
                                <div>{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

SendBuddieModal.defaultProps = {
    title: "",
    size: "lg",
    backdrop: true,
    opacity: 80,
    hasBackArrow: false,
    goBack: undefined,
};

// func
