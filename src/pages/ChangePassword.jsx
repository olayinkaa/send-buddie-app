import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SendBuddieTextField } from "../components/@form";
import { SendBuddieButton } from "../components/@ui-kits";
import { useChangePassword } from "../react-query";
import { notification } from "../utils";

function ChangePassword() {
    const location = useLocation();
    const navigate = useNavigate();
    const success = location?.state?.success;
    const token = location?.state?.token;
    const userUuid = location?.state?.value;
    const { control, handleSubmit, getValues } = useForm({
        mode: "all",
        defaultValues: {
            token,
            userUuid,
            password: "",
            matchingPassword: "",
        },
    });

    useEffect(() => {
        if (!success) {
            navigate("/login");
        }
    }, [navigate, success]);

    const { changePassword, isChangingPassword } = useChangePassword({
        onSuccess: (res) => {
            notification({ message: res?.data?.message, status: "info", direction: "top-right" });
            navigate("/login");
        },
        onError: (err) => {
            notification({ message: err?.response?.data.message, status: "error", direction: "top-right" });
        },
    });

    const handleChangePassword = (values) => {
        changePassword(values);
    };

    const validateConfirmPassword = (value) => {
        return value === getValues("password") || "Password do not match";
    };

    return (
        <div className="primary-container flex h-screen w-full flex-col items-center justify-center dark:bg-dark-brand">
            <h5 className="mb-1 text-3xl font-medium tracking-wider dark:text-white">Change Your Password</h5>
            <h4 className="mb-9 text-lg dark:text-white">Enter a new secured password</h4>
            <form className="">
                {/* TODO: remove line below */}
                {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
                <div className="w-[430px] rounded-xl border-2 border-gray-300 p-2 pt-8 dark:border-slate-600">
                    <div className="p-2">
                        <SendBuddieTextField
                            control={control}
                            name="password"
                            type="password"
                            label="Enter Password"
                            placeholder="******"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Password is required",
                                },
                                minLength: {
                                    value: 6,
                                    message: "Password must have atleast 6 characters",
                                },
                            }}
                        />
                    </div>
                    <div className="p-2">
                        <SendBuddieTextField
                            control={control}
                            name="matchingPassword"
                            type="password"
                            label="Confirm Password"
                            placeholder="******"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Confirm password is required",
                                },
                                validate: validateConfirmPassword,
                            }}
                        />
                    </div>
                    <div className="my-3 p-2">
                        <SendBuddieButton
                            title="Change Password"
                            onClick={handleSubmit(handleChangePassword)}
                            className="w-full"
                            isLoadingText="Please wait"
                            isLoading={isChangingPassword}
                        />
                    </div>
                </div>

                <div className="mt-4 flex justify-center">
                    <Link to="/login" className="text-lg hover:underline">
                        <span>Already have an account ?</span> &nbsp;
                        <span className="text-green-500">Sign in</span>
                    </Link>
                    {/* <a href="#0" className="text-lg font-medium">
                        Already have an account ? <span className="text-blue-800">sign in</span>
                    </a> */}
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;
