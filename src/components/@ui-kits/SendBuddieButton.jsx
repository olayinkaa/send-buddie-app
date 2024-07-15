/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import clsx from "classnames";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import LoadingSpinner from "../../assets/images/LoadingSpinner";

export default function SendBuddieButton({ title, type, className, isLoading, isLoadingText, onClick, ...props }) {
    const baseClass = clsx("btn-primary flex items-center justify-center gap-1 disabled:bg-gray-500", className);
    return (
        <button type={type} className={baseClass} disabled={isLoading} onClick={onClick} {...props}>
            {isLoading ? (
                <>
                    <LoadingSpinner className="!text-blue-brand" />
                    <div className="flex items-center">
                        <span className="capitalize">{isLoadingText}</span>
                        <HiOutlineDotsHorizontal fontSize={25} className="animate-pulse" />
                    </div>
                </>
            ) : (
                <span className="capitalize">{title}</span>
            )}
        </button>
    );
}

SendBuddieButton.defaultProps = {
    className: "",
    type: "submit",
    title: "saving",
    isLoadingText: "Processing",
    isLoading: false,
    // onClick: undefined
};

