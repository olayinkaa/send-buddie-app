/* eslint-disable react/prop-types */
import React from "react";
import { SendBuddieModal } from "../../../components/@ui-kits";

function EnterAmount({ isOpen, closeModal, backdrop }) {
    return (
        <SendBuddieModal title="Enter Amount" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <div className="flex flex-col p-6 mt-4">
                <div className="flex flex-col items-center gap-2">
                    <input
                        type="text"
                        className="w-32 border border-none border-neutral-200 text-center text-2xl font-medium focus:ring-0"
                        placeholder="00.00"
                    />
                    <select
                        name="currency"
                        id="currency"
                        className="cursor-pointer rounded-lg border border-neutral-100 bg-gray-100"
                    >
                        <option value="NGN">NGN</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3 pt-10 pb-6">
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Fees</span>
                        <span className="font-medium">$0</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Remaining Balance</span>
                        <span className="font-medium">$2450.00</span>
                    </div>
                </div>
                <button type="button" className="btn-primary">
                    Continue
                </button>
            </div>
        </SendBuddieModal>
    );
}

export default EnterAmount;
