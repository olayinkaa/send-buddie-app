import { useCallback } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { SendBuddieTextField, SendBuddieReactSelect } from "../../components/@form";
import { SendBuddieButton, LoadingSpinner } from "../../components/@ui-kits";
import {useWelcomeBusinessProfile, useGetCountries, useTokenRefresh } from "../../react-query";
import { notification } from "../../utils";
import { useAuth } from "../../hooks";

const ERROR_STATUS = [400, 500];
const SUCCESS_STATUS = [200, "200"];

export default function WelcomeBusinessForm() {
    const {
        authState: { user },
    } = useAuth();
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "all",
        defaultValues: {
            firstName: "", //
            lastName: "", //
            jobTitle: "", //
            address: "", //
            city: "", //
            country: "", //
            dateOfBirth: "", //
            nationality: "", //
            region: "", //
            uuid: user?.uuid,
            zipCode: "", //
            registrationNumber: "",
            businessName: "",
        },
    });
    /**
     * selectFn - transform data
     */
    const select = useCallback((res) => {
        return res?.data?.map(({ region, alpha2Code, officialNameEs }) => ({
            value: alpha2Code,
            label: officialNameEs,
            flagCode: alpha2Code?.toLowerCase(),
            region,
        }));
    }, []);
    /** Query countries */
    const { countries } = useGetCountries({ select });
    /** Action to call refresh user token */
    // TODO: 
    const { refreshUserToken, isRefreshingUserToken } = useTokenRefresh();
    /**
     * Welcome personal profile endpoint call
     */
    const onSuccess = (res) => {
        // FIXME:confirm the response by testing
        const { status, data, response: errorResponse } = res;
        if (ERROR_STATUS?.includes(errorResponse?.status)) {
            notification({ message: errorResponse?.data.message, status: "error", direction: "top-right" });
        }
        if (SUCCESS_STATUS?.includes(status)) {
            // call token refresh
            refreshUserToken({ "remember-me": true });
            notification({ message: data?.message, status: "info", direction: "top-right" });
        }
    };
    const { createBusinessProfile, isCreatingBusinessProfile } = useWelcomeBusinessProfile({ onSuccess });

    const handlePersonal = (values) => {
        const requestPayload = {
            ...values,
            country: values.country.value,
            nationality: values.country.value,
            region: values.country.region,
        };
        createBusinessProfile(requestPayload);
    };

    return (
        <>
            {isRefreshingUserToken && <LoadingSpinner />}
            <div
                className="
                primary-light-container dark:primary-dark-container 
                flex items-center justify-center p-8
                dark:bg-dark-brand md:col-span-1 lg:col-span-2 lg:px-5
                "
            >
                <div className="flex w-full flex-col rounded-xl border-2 border-gray-300 p-4 md:w-full lg:w-4/6 xl:w-3/6 ">
                    <h2 className="mb-6 flex justify-center gap-2 text-2xl text-slate-600 dark:text-white">
                        Sign up to
                        <Link to="/signup-option" className="hover:underline">
                            SendBuddie (Business)
                        </Link>
                    </h2>
                    {/* TODO: remember to remove this */}
                    <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre>
                    <pre className="hidden">{JSON.stringify(errors, null, 2)}</pre>
                    <form className="px-4">
                        {/* 
                        TODO: validation to remove white space
                        TODO: confirm the city field is a drop down base on selected country
                     */}
                        <div className="mb-2 flex gap-2">
                            <div className="w-1/2">
                                <SendBuddieTextField
                                    control={control}
                                    name="firstName"
                                    label="First name"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "First name is required",
                                        },
                                    }}
                                    asterik
                                />
                            </div>
                            <div className="w-1/2">
                                <SendBuddieTextField
                                    control={control}
                                    name="lastName"
                                    label="Last name"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Last name is required",
                                        },
                                    }}
                                    asterik
                                />
                            </div>
                        </div>
                        <div className="mb-2 flex gap-2">
                            <div className="w-1/2">
                                <SendBuddieTextField
                                    control={control}
                                    name="businessName"
                                    label="Business name"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Business name is required",
                                        },
                                    }}
                                    asterik
                                />
                            </div>
                            <div className="w-1/2">
                                <SendBuddieTextField
                                    control={control}
                                    name="registrationNumber"
                                    label="Registration Number"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Registration number is required",
                                        },
                                    }}
                                    asterik
                                />
                            </div>
                        </div>
                        <div className="mb-2 flex gap-2">
                            <div className="w-3/5">
                                <SendBuddieTextField
                                    control={control}
                                    name="jobTitle"
                                    label="Occupation"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Occupation is required",
                                        },
                                    }}
                                    asterik
                                />
                            </div>
                            <div className="w-2/5">
                                <SendBuddieTextField
                                    control={control}
                                    name="dateOfBirth"
                                    label="Date of Birth"
                                    type="date"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Date of birth is required",
                                        },
                                    }}
                                    asterik
                                />
                            </div>
                        </div>
                        <div className="mb-2 flex flex-col">
                            <SendBuddieReactSelect
                                control={control}
                                name="country"
                                label="Country"
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
                        <div className="mb-3 flex gap-2">
                            <div className="w-3/5">
                                <SendBuddieTextField
                                    control={control}
                                    name="city"
                                    label="City"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "City is required",
                                        },
                                    }}
                                    asterik
                                />
                            </div>
                            <div className="w-2/5">
                                <SendBuddieTextField
                                    control={control}
                                    name="zipCode"
                                    label="Postal code"
                                    rules={{
                                        required: {
                                            value: true,
                                            message: "Postal code is required",
                                        },
                                    }}
                                    asterik
                                />
                            </div>
                        </div>
                        <div className="mb-4 flex flex-col">
                            <SendBuddieTextField
                                control={control}
                                name="address"
                                label="House number/ Building name"
                                rules={{
                                    required: {
                                        value: true,
                                        message: "House number/Building name is required",
                                    },
                                }}
                                asterik
                            />
                        </div>
                        <div className="mb-5 flex flex-col">
                            <SendBuddieButton
                                title="Continue"
                                onClick={handleSubmit(handlePersonal)}
                                isLoading={isCreatingBusinessProfile}
                                isLoadingText="Processing"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
