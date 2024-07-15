import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { SendBuddieTextField } from "@/components/@form";
import { SendBuddieButton, SendBuddieSweetAlert, LoadingSpinner } from "@/components/@ui-kits";
import { useValidatePasswordToken, useResetPassword } from "@/react-query";
import { notification } from "@/utils";

function SendOtp() {
    const [openModal, setOpenModal] = useState(false);
    const [userDetail, setUserDetails] = useState({});
    const handleCloseModal = () => setOpenModal(false);
    const location = useLocation();
    const navigate = useNavigate();
    const success = location?.state?.success;
    const email = location?.state?.userEmail;

    const { control, handleSubmit, getValues } = useForm({
        mode: "all",
        defaultValues: {
            token: "",
        },
    });

    useEffect(() => {
        if (!success) {
            navigate("/login");
        }
    }, [navigate, success]);

    const goToChangePassword = (user) => {
        navigate("/change-password", {
            state: {
                success: true,
                ...user,
            },
        });
    };
    
    /**  */
    const { validatePasswordToken, isValidatingPasswordToken } = useValidatePasswordToken({
        onSuccess: (res) => {
            const user = res?.data?.additionalInfo[0];
            setOpenModal(true);
            setUserDetails({ ...user, token: getValues("token") });
            setTimeout(() => {
                goToChangePassword({ ...user, token: getValues("token") });
            }, 4000);
        },
        onError: (err) => {
            notification({
                message: err.response.data.error,
                status: "error",
                direction: "top-right",
                // toastId:"otp"
            });
        },
    });

    const hanldeTokenVerification = (value) => {
        validatePasswordToken(value);
    };
    /** Resend for OTP */
    const { resetPassword, isResettingPassword } = useResetPassword({
        onSuccess: (res) => {
            notification({ message: res?.data?.message, status: "info", direction: "top-right" });
        },
        onError: (err) => {
            notification({ message: err?.response.data.message, status: "error", direction: "top-right" });
        },
    });

    const handleResetPassword = () => {
        const requestPayload = {
            usernameOrEmail: email,
        };
        resetPassword(requestPayload);
    };

    return (
        <>
            {isResettingPassword && <LoadingSpinner />}
            <h1>{email}</h1>
            <div className="primary-container flex h-screen w-full flex-col items-center pt-44">
                <div className="mb-8">
                    <h5 className="mb-3 text-center text-3xl font-medium">OTP has been sent</h5>
                    <h5 className="text-center text-base">Enter the code that was sent to your email</h5>
                </div>
                <div className="w-[430px] rounded-xl border-2 border-gray-300 p-2 pt-8">
                    <form className="">
                        <div className="p-4">
                            <SendBuddieTextField
                                type="number"
                                control={control}
                                label="Enter code"
                                name="token"
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please enter the verification code",
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Please enter six-digits code",
                                    },
                                    maxLength: {
                                        value: 6,
                                        message: "Please enter six-digits code",
                                    },
                                }}
                            />
                        </div>
                        <div className="mb-3 p-4">
                            <SendBuddieButton
                                title="Verify"
                                onClick={handleSubmit(hanldeTokenVerification)}
                                className="w-full"
                                isLoadingText="Please wait"
                                isLoading={isValidatingPasswordToken}
                            />
                        </div>
                    </form>
                </div>
                <h5 className="m-3">
                    <button type="button" className="hover:text-green-400" onClick={handleResetPassword}>
                        Didn&#39;t get the email ? Click here
                    </button>
                </h5>
            </div>
            {openModal && (
                <SendBuddieSweetAlert
                    isOpen={openModal}
                    closeModal={handleCloseModal}
                    onConfirm={() => goToChangePassword(userDetail)}
                    message="OTP has been validated successfully"
                    confirmText="Ok"
                    backdrop={false}
                />
            )}
        </>
    );
}

export default SendOtp;
