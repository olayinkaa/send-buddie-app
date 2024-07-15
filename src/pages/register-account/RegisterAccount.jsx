import { useCallback, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SendBuddieTextField, SendBuddieReactSelect } from "@/components/@form";
import { SendBuddieButton, SendBuddieToaster } from "@/components/@ui-kits";
import { useGetCountries, usePostRegister } from "@/react-query";
import { VALIDATE_EMAIL } from "@/utils/validators";
// import { notification } from "@/utils";

export default function RegisterAccount() {
    const navigate = useNavigate();
    const location = useLocation();
    const accountType = location?.state?.accountType;
    /**
     *
     */
    useEffect(() => {
        if (accountType === null || accountType === undefined) {
            navigate("/signup-option");
        }
    }, [navigate, accountType]);
    /**
     * React hook forms
     */
    const { control, handleSubmit, getValues, watch } = useForm({
        mode: "all",
        defaultValues: {
            accountType,
            // active: true,
            callingCode: "",
            email: "",
            // id: 0,
            password: "",
            confirmPassword: "", // do not send this in request payload
            phoneNumber: "",
            // uuid: "",
        },
    });
    /**
     * Fetch all countries endpoint
     * selectFn - transform data
     */
    const select = useCallback((res) => {
        return res?.data?.map(({ callingCode, alpha2Code }) => ({
            value: callingCode,
            label: `(+ ${callingCode}) ${alpha2Code}`,
            flagCode: alpha2Code?.toLowerCase(),
        }));
    }, []);

    const { countries } = useGetCountries({ select });

    /** Register user */
    const { registerUser, isRegisteringUser } = usePostRegister({
        onSuccess: (res) => {
            SendBuddieToaster({ message: res.data.message});
            navigate("/register-otp", {
                state: {
                    success: true,
                    registerEmail: getValues("email"),
                },
            });
        },
        onError: (err) => {
            SendBuddieToaster({
                status: "error",
                message: err?.response.data.message,
            });
        },
    });

    const handlePersonalAccount = (values) => {
        const { confirmPassword, ...rest } = values;
        const requestPayload = {
            ...rest,
            callingCode: values.callingCode.value,
        };
        registerUser(requestPayload);
    };
    /**
     * custom validation
     * @param {string} value
     * @returns
     */
    const validateConfirmPassword = (value) => {
        return value === getValues("password") || "Password do not match";
    };

    return (
        <div
            className="
            primary-light-container dark:primary-dark-container 
            flex items-center justify-center p-8
            dark:bg-dark-brand md:px-20 md:col-span-2 lg:px-10
            "
        >
            <div className="flex w-5/6 flex-col rounded-xl border-2 border-gray-300 p-4  lg:w-4/6 xl:w-2/5 ">
                <h2 className="mb-6 flex justify-center gap-2 text-2xl text-slate-600 dark:text-white">
                    Sign up to
                    <Link to="/signup-option" className="hover:underline">
                        SendBuddie
                    </Link>
                </h2>
                {/* TODO: remember to remove this pre tag */}
                <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}
                <form autoComplete="off">
                    <div className="mb-3 flex flex-col">
                        <SendBuddieTextField
                            control={control}
                            name="email"
                            type="email"
                            label="Email"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Email address is required",
                                },
                                pattern: VALIDATE_EMAIL,
                            }}
                            asterik
                        />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <SendBuddieReactSelect
                            control={control}
                            name="callingCode"
                            label="country"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please choose a country",
                                },
                            }}
                            asterik
                            options={countries}
                            placeholder=""
                        />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <SendBuddieTextField
                            control={control}
                            name="phoneNumber"
                            type="number"
                            label="Phone Number"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Phone number is required",
                                },
                            }}
                            asterik
                        />
                    </div>
                    <div className="mb-3 flex flex-col">
                        <SendBuddieTextField
                            control={control}
                            name="password"
                            type="password"
                            label="Password"
                            autoComplete="new-password"
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
                            asterik
                        />
                    </div>{" "}
                    <div className="mb-5 flex flex-col">
                        <SendBuddieTextField
                            control={control}
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Confirm Password is required",
                                },
                                validate: validateConfirmPassword,
                            }}
                            asterik
                            onPaste={(e) => {
                                e.preventDefault();
                                return false;
                            }}
                        />
                    </div>
                    <div className="flex gap-x-2">
                        <input type="checkbox" name="" id="" />
                        <p>
                            By cicking the tick box, I confirm that I have read, consent and agreed sendbuddie finance
                            <span className="text-green-500"> User Agreement</span> and{" "}
                            <span className="text-green-500">Privacy Policy</span>
                        </p>
                    </div>
                    <div className="my-3 flex flex-col">
                        <SendBuddieButton
                            title="Sign up"
                            onClick={handleSubmit(handlePersonalAccount)}
                            isLoading={isRegisteringUser}
                            isLoadingText="Processing"
                        />
                    </div>
                    <Link to="/login" className="flex items-center justify-center hover:underline">
                        <span>Already have an account ?</span> &nbsp;
                        <span to="/login" className="text-green-500">
                            Sign in here
                        </span>
                    </Link>
                </form>
            </div>
        </div>
    );
}
