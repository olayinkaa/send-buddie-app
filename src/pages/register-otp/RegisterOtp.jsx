import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import { SendBuddiePinInputField } from "@/components/@form";
import { LoadingSpinner, SendBuddieSweetAlert, SendBuddieToaster } from "@/components/@ui-kits";
import { StyledInput } from "./style";
import { VALIDATE_EMAIL } from "@/utils/validators";
import { useVerifyAccount, useResendRegistrationToken, useChangeEmail } from "@/react-query";
import { OTP_LENGTH } from "@/utils/constant";

function RegisterOtp() {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [showMessage, setShowMessage] = useState("");
    const [showChangeEmail, setShowChangeEmail] = useState(false);
    const switchChangeEmail = () => setShowChangeEmail(!showChangeEmail);
    const [openModal, setOpenModal] = useState(false);
    const handleCloseModal = () => setOpenModal(false);
    const location = useLocation();
    const navigate = useNavigate();
    const success = location?.state?.success;
    const registerEmail = location?.state?.registerEmail;
    // const registerUserData = location?.state?.data;
    const OTPvalue = otp?.join("");

    // console.log(registerUserData);
    const { control, handleSubmit } = useForm({
        mode: "all",
        defaultValues: {
            newEmail: "",
            userUuid: "", // TODO: where does userUuid comes from
        },
    });

    useEffect(() => {
        if (!success) {
            navigate("/signup-option");
        }
    }, [navigate, success]);

    const { verifyAccount, isVerifyingAccount } = useVerifyAccount({
        onSuccess: (res) => {
            setOpenModal(true);
            SendBuddieToaster({
                message: res?.data?.message
            });
        },
        onError: (err) => {
            SendBuddieToaster({
                status: "error",
                message: err?.response.data.error,
                duration: 10000
            });
        },
    });

    /**  */
    useEffect(() => {
        if (OTPvalue.length === OTP_LENGTH) {
            verifyAccount({
                token: OTPvalue,
            });
        }
    }, [OTPvalue, verifyAccount]);

    /** Resend OTP */
    const { resendRegistrationToken, isResendingRegistrationToken } = useResendRegistrationToken({
        onSuccess: (res) => {
            setShowMessage(res?.data.message);
            // setTimeout(() => navigate("/login", 2500));
        },
        onError: (err) => {
            SendBuddieToaster({
                status: "error",
                message: err?.response.data.message,
            });
        },
    });

    /** Change Email  */
    const { changeEmail, isChangingEmail } = useChangeEmail({
        onSuccess: (res) => {
            // eslint-disable-next-line no-console
            console.log(res);
        },
        onError: (err) => {
            SendBuddieToaster({
                status: "error",
                message: err?.response.data.message,
            });
        },
    });

    const handleChangeEmail = (values) => {
        changeEmail(values);
    };

    return (
        <>
            {(isVerifyingAccount || isResendingRegistrationToken || isChangingEmail) && <LoadingSpinner />}
            <div className="lg:primary-container col-span-2 flex items-start justify-center pt-8 md:pt-60">
                <div className="flex w-full flex-col items-center space-y-8 rounded-lg p-16 md:w-3/5">
                    <p className="text-center text-2xl font-normal">
                        Please enter the OTP sent to your email to begin using your account.
                    </p>
                    <div className="mt-4 flex flex-row gap-3">
                        <SendBuddiePinInputField name="registerOTP" pin={otp} setPin={setOtp} className="h-12 w-12" />
                    </div>
                    {showMessage && (
                        <div>
                            <p className="text-center">
                                <span className="text-green-500">{showMessage}</span>, <br />
                                please check your email and verify to start using your account
                            </p>
                        </div>
                    )}
                    <div>
                        <button
                            type="button"
                            className="hover:underline"
                            onClick={() => resendRegistrationToken({ email: registerEmail })}
                        >
                            <span>Didn&rsquo;t receive any mail ?</span> &nbsp;
                            <span className="text-blue-600/95">send again</span>
                        </button>
                    </div>
                    <div className="flex flex-col w-3/5">
                        <button type="button" className="text-blue-500 hover:underline" onClick={switchChangeEmail}>
                            Change email address
                        </button>
                        {showChangeEmail && (
                            <div className="relative -mt-2">
                                <div className="flex flex-col">
                                    <StyledInput
                                        control={control}
                                        name="newEmail"
                                        placeholder="Please, enter your email address here..."
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Email address is required",
                                            },
                                            pattern: VALIDATE_EMAIL,
                                        }}
                                    />
                                </div>
                                <HiOutlinePaperAirplane
                                    fontSize={30}
                                    className="absolute right-0 top-8 flex-1 text-blue-400 cursor-pointer"
                                    onClick={handleSubmit(handleChangeEmail)}
                                />
                            </div>
                        )}
                    </div>
                    {/* <pre>{JSON.stringify(otp, null, 2)}</pre> */}
                    {/* <pre>{JSON.stringify(registerEmail, null, 2)}</pre> */}
                    {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
                </div>
            </div>
            {openModal && (
                <SendBuddieSweetAlert
                    isOpen={openModal}
                    closeModal={handleCloseModal}
                    onConfirm={() => navigate("/login")}
                    backdrop={false}
                    hasCancelBtn={false}
                />
            )}
        </>
    );
}

export default RegisterOtp;
