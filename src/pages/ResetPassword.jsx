import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { SendBuddieTextField } from "@/components/@form";
import { SendBuddieButton } from "@/components/@ui-kits";
import { VALIDATE_EMAIL } from "@/utils/validators";
import { notification } from "@/utils";
import { useResetPassword } from "@/react-query";

function ResetPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const { control, handleSubmit } = useForm({
        mode: "all",
        defaultValues: {
            email: "",
        },
    });
    // TODO: email not passing to state object in the route
    const { resetPassword, isResettingPassword } = useResetPassword({
        onSuccess: (res) => {
            navigate("/verification", {
                /** call to refresh */
                state: {
                    success: true,
                    userEmail:email
                },
            });
            notification({ message: res?.data?.message, status: "info", direction: "top-right" });
        },
        onError: (err) => {
            notification({ message: err?.response.data.message, status: "error", direction: "top-right" });
        },
    });

    const handleResetPassword = (value) => {
        setEmail(value?.email)
        const requestPayload = {
            usernameOrEmail: value.email,
        };
        resetPassword(requestPayload);
    };

    return (
        <div className="primary-container flex h-screen w-full flex-col items-center pt-44 dark:bg-dark-brand">
            <div className="flex flex-col items-center">
                <h5 className="mb-1 text-3xl font-medium tracking-wider dark:text-white">Reset Your Password</h5>
                <h4 className="mb-4 flex flex-col text-center text-lg dark:text-white">
                    <span>Enter your user account&#39;s verified email address and we will</span>
                    <span className="text-center">send you a password code</span>
                </h4>
            </div>
            <div
                className="
                w-[440px] rounded-xl border-2 border-gray-300
                p-2 pt-8 dark:border-slate-600"
            >
                <form className="">
                    <div className="p-4">
                        <SendBuddieTextField
                            type="email"
                            control={control}
                            label="Enter your email address"
                            name="email"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Email address is required",
                                },
                                pattern: VALIDATE_EMAIL,
                            }}
                        />
                    </div>
                    <div className="mb-3 p-4">
                        <SendBuddieButton
                            title="Continue"
                            onClick={handleSubmit(handleResetPassword)}
                            className="w-full"
                            isLoadingText="Please wait"
                            isLoading={isResettingPassword}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
