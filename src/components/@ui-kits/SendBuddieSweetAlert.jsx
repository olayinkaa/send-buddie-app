import SendBuddieModal from "./SendBuddieModal";
import SendBuddieButton from "./SendBuddieButton";
import { ICON_LIST  } from "@/utils/constant";


export default function SendBuddieSweetAlert({
    // number
    opacity,
    // string
    confirmText,
    cancelText,
    isLoadingText,
    icon,
    message,
    title,
    // function
    closeModal,
    onConfirm,
    onCancel,
    // boolean
    backdrop,
    isOpen,
    hasAnimation,
    hasCancelBtn,
    hasConfirmBtn,
    isLoading,
    children,
    ...props
}) {
    return (
        <SendBuddieModal title={title} isOpen={isOpen} closeModal={closeModal} backdrop={backdrop} opacity={opacity}>
            <section className="flex flex-col items-center gap-6 py-4 px-10">
                {icon && <div className={`${hasAnimation && "animate-bounce"}`}>{ICON_LIST[icon]}</div>}
                {message && <p className="text-center text-2xl font-medium">{message}</p>}
                {children}
                {!children && (
                    <div className="w-full flex gap-2">
                        {hasConfirmBtn && (
                            <SendBuddieButton
                                type="button"
                                isLoadingText={isLoadingText}
                                isLoading={isLoading}
                                title={confirmText}
                                onClick={onConfirm}
                                className="mt-5 flex w-full justify-center rounded-lg bg-blue-brand px-5 py-3 text-white"
                                {...props}
                            />
                        )}
                        {hasCancelBtn && (
                            <SendBuddieButton
                                type="button"
                                title={cancelText}
                                onClick={onCancel}
                                className="mt-5 flex w-full justify-center rounded-lg bg-gray-300 text-slate-900 px-5 py-3"
                                {...props}
                            />
                        )}
                    </div>
                )}
            </section>
        </SendBuddieModal>
    );
}

SendBuddieSweetAlert.defaultProps = {
    // eslint-disable-next-line dot-notation
    icon: "success_lock_mark_icon",
    message: "Your account has been created successfully",
    title: "",
    confirmText: "Sign in",
    cancelText: "Cancel",
    hasAnimation: true,
    hasCancelBtn: true,
    hasConfirmBtn: true,
    onCancel: undefined,
    onConfirm: undefined,
    opacity: 80,
};
