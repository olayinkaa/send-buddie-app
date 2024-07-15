/* eslint-disable react/prop-types */
import { BiChevronRight } from "react-icons/bi";
import { SendBuddieModal } from "../../../components/@ui-kits";
import CreditCardIcon from "../../../assets/images/CreditCardIcon";
import ExclamationIcon from "../../../assets/images/ExclamationIcon";

function BankCard({ isOpen, closeModal, backdrop }) {
    return (
        <SendBuddieModal title="Send Money" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <div className="flex flex-col mt-2 p-6">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        name=""
                        id=""
                        className="box-border w-full rounded-t-lg border-b-0 border-neutral-300  py-3 focus:border-neutral-200 focus:ring-0"
                    />
                    <CreditCardIcon className="absolute right-2 top-1/2 -translate-y-1/2" />
                </div>
                <div className="flex">
                    <div className="w-1/2">
                        <input
                            type="text"
                            className="w-full rounded-bl-lg border-r-0 border-neutral-200 py-3  focus:border-neutral-200 focus:ring-0"
                            placeholder="MM/YYYY"
                        />
                    </div>
                    <div className="relative w-1/2">
                        <input
                            type="text"
                            className="w-full rounded-br-lg border border-neutral-200 py-3  focus:border-neutral-200 focus:ring-0"
                            placeholder="CVV"
                        />
                        <ExclamationIcon className="absolute right-2 top-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-4">
                    <h3>Use existing bank card</h3>
                    <div
                        className="
                        duration group flex items-center justify-between rounded-lg
                        border border-neutral-200 p-4 shadow-md transition
                        hover:translate-x-1 hover:cursor-pointer hover:bg-blue-brand"
                    >
                        <div className="flex items-center gap-3 group-hover:text-white">
                            <CreditCardIcon />
                            <span>GTBank **5683</span>
                        </div>
                        <BiChevronRight fontSize={25} className="text-neutral-500 group-hover:text-white" />
                    </div>{" "}
                    <div
                        className="
                        duration group flex items-center justify-between rounded-lg
                        border border-neutral-200 p-4 shadow-md transition
                        hover:translate-x-1 hover:cursor-pointer hover:bg-blue-brand"
                    >
                        <div className="flex items-center gap-3 group-hover:text-white">
                            <CreditCardIcon />
                            <span>Zenith Bank **5683</span>
                        </div>
                        <BiChevronRight fontSize={25} className="text-neutral-500 group-hover:text-white" />
                    </div>
                    <button type="button" className="btn-primary mt-3">Continue</button>
                </div>
            </div>
        </SendBuddieModal>
    );
}

export default BankCard;
