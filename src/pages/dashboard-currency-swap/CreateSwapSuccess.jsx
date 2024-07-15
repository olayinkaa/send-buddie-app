/* eslint-disable react/prop-types */
import { SendBuddieModal } from "../../components/@ui-kits";
import SuccessIcon from "../../assets/icons/SuccessIcon";

export default function CreateSwapSuccess({ isOpen, closeModal, backdrop }) {
    return (
        <SendBuddieModal title="" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <div className="flex flex-col items-center gap-4 p-6">
                <h4 className="text-xl">Create Swap</h4>
                <SuccessIcon />
                <h4>You have created a new swap</h4>
                <button type="button" className="btn-primary">
                    Continue
                </button>
                <button type="button" className="font-bold text-blue-brand">
                    Share
                </button>
            </div>
        </SendBuddieModal>
    );
}
