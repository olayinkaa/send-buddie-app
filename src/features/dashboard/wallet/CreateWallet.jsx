import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
    SendBuddieModal,
    SendBuddieRadioGroup,
    SendBuddieButton,
    SendBuddieToaster,
} from "@/components/@ui-kits";
import { useCreateWallet, queryKeys } from "@/react-query";

export default function CreateWallet({ isOpen, closeModal, backdrop, accountDetails }) {
    const [value, setValue] = useState("");
    const queryClient = useQueryClient();

    const { createWallet, isCreatingWallet } = useCreateWallet({
        onSuccess: (res) => {
            queryClient.invalidateQueries([queryKeys.GET_USER_ACCOUNT_INFO]);
            SendBuddieToaster({ message: res?.data?.message, position: "top-right" });
            closeModal();
        },
        onError: (err) => {
            SendBuddieToaster({ message: err?.response?.data.message, status: "error", position: "top-right" });
        },
    });

    const handleSubmit = async () => {
        const requestPayload = {
            accountNumber: accountDetails?.accountNumber,
            currencyCode: value,
        };
        createWallet(requestPayload);
    };

    return (
        <SendBuddieModal title="Select Wallet Currency" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            {/* <pre>{JSON.stringify(value,null,2)}</pre> */}
            <div className="flex flex-col gap-4 p-6 pb-14">
                <SendBuddieRadioGroup value={value} onChange={setValue} accountDetails={accountDetails} />
                <SendBuddieButton
                    title="Create Wallet"
                    disabled={!value}
                    onClick={handleSubmit}
                    isLoading={isCreatingWallet}
                    isLoadingText="Please wait"
                />
            </div>
        </SendBuddieModal>
    );
}
