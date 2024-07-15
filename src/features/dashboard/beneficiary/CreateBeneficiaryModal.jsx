import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useQueryClient } from "@tanstack/react-query";
import { SendBuddieButton, SendBuddieModal } from "@/components/@ui-kits";
import { SendBuddieTextField, SendBuddieReactSelect, SendBuddieSelectField } from "@/components/@form";
import { BENEFICIARY_TYPE } from "./constants";
import { usePostBeneficiary, useGetBankByCountryCode, useGetCountries, queryKeys } from "@/react-query";
import LoadingSpinner from "@/assets/images/LoadingSpinner";
import { notification } from "@/utils";

export default function CreateBeneficiaryModal({ isOpen, closeModal, backdrop }) {
    const queryClient = useQueryClient();
    const { control, handleSubmit, watch, setValue } = useForm({
        mode: "all",
        defaultValues: {
            accountNumber: "",
            bankCode: "", //
            beneficiaryType: "",
            countryCode: "",
            email: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            switchCode: "", //
        },
    });

    /**  */
    const countryCode = watch("countryCode");

    /** */
    useEffect(() => {
        setValue("bankCode", "");
    }, [countryCode, setValue]);
    /**
     * Fetch all countries endpoint
     * selectFn - transform data
     *
     */
    const { countries, isLoadingCountries } = useGetCountries({
        select: useCallback((res) => {
            return res?.data?.map(({ officialNameEs, alpha2Code }) => ({
                value: alpha2Code,
                label: `${officialNameEs}`,
                flagCode: alpha2Code?.toLowerCase(),
            }));
        }, []),
    });
    /**
     *Fetch banks
     *Transform into label, value
     */
    const { banks, isLoadingBank } = useGetBankByCountryCode({
        countryCode: countryCode?.value,
        enabled: !!countryCode?.value,
        select: useCallback((res) => {
            return res?.data?.map(({ code, name, switchCode }) => ({
                value: code,
                label: `${name}`,
                switchCode,
            }));
        }, []),
    });

    const { createBeneficiary, isCreatingBeneficiary } = usePostBeneficiary({
        onSuccess: (res) => {
            queryClient.invalidateQueries([queryKeys.GET_BENEFICIARIES]);
            notification({ message: res?.data?.message, status: "info", direction: "top-right" });
            closeModal();
        },
        onError: (err) => {
            notification({ message: err?.response?.data.message, status: "error", direction: "top-right" });
        },
    });
    /**
     *
     */
    const handleCreateBeneficiary = (values) => {
        const requestPayload = {
            ...values,
            countryCode: values.countryCode.value,
            bankCode: values.bankCode.value,
            switchCode: values.bankCode.switchCode,
        };
        createBeneficiary(requestPayload);
    };

    return (
        <SendBuddieModal title="New Beneficiary" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            {/* <pre className="hidden">{JSON.stringify(watch(), null, 2)}</pre> */}
            {/* <pre>{JSON.stringify(countryCode,null,2)}</pre> */}
            <form autoComplete="off" className="px-5 my-5">
                <div className="mb-3 flex gap-2">
                    <div className="w-1/2">
                        <SendBuddieTextField
                            control={control}
                            name="firstName"
                            label="First Name"
                            rules={{
                                required: {
                                    value: true,
                                    message: "First name is required",
                                },
                            }}
                        />
                    </div>
                    <div className="w-1/2">
                        <SendBuddieTextField
                            control={control}
                            name="lastName"
                            label="Last Name"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Last name is required",
                                },
                            }}
                        />
                    </div>
                </div>{" "}
                <div className="mb-3 flex flex-col">
                    <SendBuddieTextField
                        control={control}
                        name="email"
                        label="Email"
                        rules={{
                            required: {
                                value: true,
                                message: "Email is required",
                            },
                            // TODO: email validation
                        }}
                    />
                </div>
                <div className="mb-3 flex flex-col">
                    <SendBuddieTextField
                        control={control}
                        name="phoneNumber"
                        label="Phone number"
                        type="number"
                        rules={{
                            required: {
                                value: true,
                                message: "Phone number is required",
                            },
                            // TODO: phone number validation: minimum, maximum
                        }}
                    />
                </div>
                <div className="mb-3 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="flex-1">
                            <SendBuddieReactSelect
                                control={control}
                                name="countryCode"
                                label="Country"
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please choose a country",
                                    },
                                }}
                                options={countries}
                            />
                        </div>
                        {isLoadingCountries && <LoadingSpinner className="!text-blue-brand mt-5" />}
                    </div>
                </div>{" "}
                <div className="mb-3 flex flex-col">
                    <div className="flex items-center gap-2">
                        <div className="flex-1">
                            <SendBuddieReactSelect
                                control={control}
                                name="bankCode"
                                label="Select bank"
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Please select a bank",
                                    },
                                }}
                                options={banks}
                            />
                        </div>
                        {countryCode?.value && isLoadingBank && <LoadingSpinner className="!text-blue-brand mt-5" />}
                    </div>
                </div>
                <div className="mb-6 flex gap-2">
                    <div className="w-1/2">
                        <SendBuddieSelectField
                            control={control}
                            name="beneficiaryType"
                            label="Select beneficiary type"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please select a beneficiary type",
                                },
                            }}
                            options={BENEFICIARY_TYPE}
                        />
                    </div>
                    <div className="w-1/2">
                        <SendBuddieTextField
                            control={control}
                            name="accountNumber"
                            label="Account number"
                            type="number"
                            rules={{
                                required: {
                                    value: true,
                                    message: "Account number is required",
                                },
                                // TODO: validation, min & max
                            }}
                        />
                    </div>
                </div>
                <SendBuddieButton
                    className="w-full"
                    title="Continue"
                    onClick={handleSubmit(handleCreateBeneficiary)}
                    isLoading={isCreatingBeneficiary}
                    isLoadingText="Please wait"
                />
            </form>
            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
        </SendBuddieModal>
    );
}
