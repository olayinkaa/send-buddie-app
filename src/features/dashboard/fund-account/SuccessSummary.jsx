/* eslint-disable react/prop-types */
// import { BiChevronRight } from "react-icons/bi";
import { SendBuddieModal } from "../../../components/@ui-kits";
import SuccessIcon from "../../../assets/icons/SuccessIcon";

export default function SuccessSummary({ isOpen, closeModal, backdrop }) {
    return (
        <SendBuddieModal isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <section className="flex flex-col items-center gap-6 py-5">
                <div className="animate-bounce">
                    <SuccessIcon />
                </div>
                <h3 className="text-xl font-medium">Fund added successfully</h3>
            </section>
            <hr />
            <section className="flex justify-between px-6 py-4">
                <div className="flex flex-col gap-3">
                    <span className="text-gray-600">Wallet Type</span>
                    <span>Ozenua Oluwatobi</span>
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-gray-600">Amount</span>
                    <span>$ 89.00</span>
                </div>
            </section>
            <section className="px-6 py-4">
                <button type="button" className="btn-primary w-full">
                    Done
                </button>
            </section>
        </SendBuddieModal>
    );
}
