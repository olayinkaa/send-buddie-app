import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { SendBuddieModal } from "../../components/@ui-kits";

function ProgressBarModal({ isOpen, closeModal, backdrop, cancelUpload, progressWidth }) {
    return (
        // progressWidth > 0 && (
        <SendBuddieModal title="" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <div className="w-full p-2">
                <p className="flex items-center justify-center">
                    Uploading file
                    <HiOutlineDotsHorizontal fontSize={25} className="animate-pulse" />
                </p>
                <div className="bg-gray-400 rounded-full">
                    <div
                        className="bg-blue-600 text-sm h-4 font-medium text-blue-100 text-center leading-none rounded-full"
                        style={{ width: `${progressWidth}%` }}
                    >
                        <span>{progressWidth}%</span>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <button type="button" className="text-red-500" onClick={cancelUpload}>
                        Cancel
                    </button>
                </div>
            </div>
        </SendBuddieModal>
        // )
    );
}

ProgressBarModal.defaultProps = {
    backdrop: false,
};

export default ProgressBarModal;
