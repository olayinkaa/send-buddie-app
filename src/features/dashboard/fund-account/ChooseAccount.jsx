/* eslint-disable react/prop-types */
import { BiChevronRight } from "react-icons/bi";
import { SendBuddieModal } from "../../../components/@ui-kits";
import { FLAG } from "../../../data/home-page-data";

const [spain] = FLAG;

function ChooseAccount({ isOpen, closeModal, backdrop }) {
    return (
        <SendBuddieModal title="Choose account to fund" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <div className="flex flex-col gap-4 p-6 pb-14">
                <div
                    className="
                    group flex justify-between rounded-lg border border-neutral-200
                    p-3 transition duration-700 hover:translate-x-1 hover:cursor-pointer
                    hover:bg-blue-brand
                    "
                >
                    <div className="flex items-center gap-2 group-hover:text-white">
                        <img src={spain.country} alt="" className="h-6 w-6" />
                        <span>US Dollar</span>
                    </div>
                    <div className="flex gap-2 text-gray-600 group-hover:text-white">
                        <span>$ 4,530</span>
                        <BiChevronRight fontSize={25} />
                    </div>
                </div>{" "}
                <div
                    className="
                    group flex justify-between rounded-lg border border-neutral-200
                    p-3 transition duration-700 hover:translate-x-1 hover:cursor-pointer
                    hover:bg-blue-brand
                    "
                >
                    <div className="flex items-center gap-2 group-hover:text-white">
                        <img src={spain.country} alt="" className="h-6 w-6" />
                        <span>NGN naira</span>
                    </div>
                    <div className="flex gap-2 text-gray-600 group-hover:text-white">
                        <span>₦ 244,530</span>
                        <BiChevronRight fontSize={25} />
                    </div>
                </div>{" "}
                <div
                    className="
                    group flex justify-between rounded-lg border border-neutral-200
                    p-3 transition duration-700 hover:translate-x-1 hover:cursor-pointer
                    hover:bg-blue-brand
                    "
                >
                    <div className="flex items-center gap-2 group-hover:text-white">
                        <img src={spain.country} alt="" className="h-6 w-6" />
                        <span>GB Pounds</span>
                    </div>
                    <div className="flex gap-2 text-gray-600 group-hover:text-white">
                        <span>E 45,530</span>
                        <BiChevronRight fontSize={25} />
                    </div>
                </div>{" "}
                <div
                    className="
                    group flex justify-between rounded-lg border border-neutral-200
                    p-3 transition duration-700 hover:translate-x-1 hover:cursor-pointer
                    hover:bg-blue-brand
                  "
                >
                    <div className="flex items-center gap-2 group-hover:text-white">
                        <img src={spain.country} alt="" className="h-6 w-6" />
                        <span>US Dollar</span>
                    </div>
                    <div className="flex gap-2 text-gray-600 group-hover:text-white">
                        <span>$ 4,530</span>
                        <BiChevronRight fontSize={25} />
                    </div>
                </div>{" "}
                
            </div>
        </SendBuddieModal>
    );
}

export default ChooseAccount;
