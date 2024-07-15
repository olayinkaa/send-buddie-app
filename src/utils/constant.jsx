import SuccessIcon from "@/assets/icons/SuccessIcon";
import SuccessIconLock from "@/assets/icons/SuccessIconLock";
import SuccessIconLockMark from "@/assets/icons/SuccessIconLockMark";
import DeleteIcon from "@/assets/icons/DeleteIcon";

export const PERSONAL_ACCOUNT = "PERSONAL ACCOUNT";
export const BUSINESS_ACCOUNT = "BUSINESS ACCOUNT";
export const OTP_LENGTH = 6;
export const ERROR_STATUS = [400, 500];
export const SUCCESS_STATUS = [200, "200"];


export const ICON_LIST = {
    success_lock_mark_icon: <SuccessIconLockMark />,
    success_lock_icon: <SuccessIconLock />,
    success_icon: <SuccessIcon />,
    delete_icon: <DeleteIcon />,
};