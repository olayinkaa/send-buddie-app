/* eslint-disable react/prop-types */
import { BiMoney, BiChevronRight } from "react-icons/bi";
import { SendBuddieModal } from "../../../components/@ui-kits";

function ChoosePaymentModal({ isOpen, closeModal, backdrop, onClick }) {
    return (
        <SendBuddieModal title="Fund account" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <div className="flex flex-col gap-4 p-6 pb-14">
                <button
                    type="button"
                    onClick={onClick}
                    className="
                    group flex justify-between rounded-lg border border-neutral-200
                    p-3 transition duration-700 hover:translate-x-1 hover:cursor-pointer
                    hover:bg-blue-brand
                    "
                >
                    <div className="flex items-center gap-2 group-hover:text-white">
                        <BiMoney fontSize={25} />
                        <span>Debit/Credit card</span>
                    </div>
                    <span>
                        <BiChevronRight fontSize={25} className="text-gray-500 group-hover:text-white" />
                    </span>
                </button>{" "}
                <button
                    type="button"
                    className="
                    group flex justify-between rounded-lg border border-neutral-200
                    p-3 transition duration-700 hover:translate-x-1 hover:cursor-pointer
                    hover:bg-blue-brand
                    "
                >
                    <div className="flex items-center gap-2 group-hover:text-white">
                        <BiMoney fontSize={25} />
                        <span>Bank Deposit</span>
                    </div>
                    <span>
                        <BiChevronRight fontSize={25} className="text-gray-500 group-hover:text-white" />
                    </span>
                </button>
            </div>
        </SendBuddieModal>
    );
}

export default ChoosePaymentModal;
