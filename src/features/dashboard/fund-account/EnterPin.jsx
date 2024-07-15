/* eslint-disable react/prop-types */
import { SendBuddieModal } from "../../../components/@ui-kits";
import CreditCardIcon from "../../../assets/images/CreditCardIcon";
import ExclamationIcon from "../../../assets/images/ExclamationIcon";

function EnterPin({ isOpen, closeModal, backdrop }) {
    return (
        <SendBuddieModal title="Enter PIN" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <div className="flex flex-col gap-5 p-6 mt-2">
                <div>
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="3045 4567 2345 1009"
                            className="box-border w-full rounded-t-lg border-b-0 border-neutral-300  py-3 focus:border-neutral-200 focus:ring-0"
                        />
                        <CreditCardIcon className="absolute right-2 top-1/2 -translate-y-1/2" />
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <input
                                type="text"
                                className="w-full rounded-bl-lg border-r-0 border-neutral-200 py-3  focus:border-neutral-200 focus:ring-0"
                                placeholder="10/2024"
                            />
                        </div>
                        <div className="relative w-1/2">
                            <input
                                type="password"
                                className="w-full rounded-br-lg border border-neutral-200 py-3  focus:border-neutral-200 focus:ring-0"
                                placeholder="***"
                            />
                            <ExclamationIcon className="absolute right-2 top-1/2 -translate-y-1/2" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center">
                        <input
                            type="password"
                            name=""
                            id=""
                            placeholder="****"
                            className="
                            box-border w-full rounded-t-lg 
                            border-b-0 border-neutral-300 py-3
                            text-center focus:border-neutral-200 focus:ring-0"
                        />
                    </div>
                    <div className="flex">
                        <div className="flex w-full items-center gap-2 rounded-b-lg border border-neutral-200 p-4 pb-6  ">
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                1
                            </button>
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                2
                            </button>
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                3
                            </button>
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                4
                            </button>
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                5
                            </button>
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                6
                            </button>
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                7
                            </button>
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                8
                            </button>
                            <button
                                type="button"
                                className="btn-primary h-10 w-10 self-center bg-neutral-200 text-gray-700"
                            >
                                9
                            </button>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn-primary">Continue</button>
            </div>
        </SendBuddieModal>
    );
}

export default EnterPin;
