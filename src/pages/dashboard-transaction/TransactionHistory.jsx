/* eslint-disable react/prop-types */
// import { BiChevronRight } from "react-icons/bi";
import { SendBuddieModal } from "../../components/@ui-kits";
import ExclamationIcon from "../../assets/images/ExclamationIcon";

export default function TransactionHistory({ isOpen, closeModal, backdrop }) {
    return (
        <SendBuddieModal title="Transaction History" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <section className="mt-2 flex flex-col gap-10 p-6">
                <section className="flex justify-between">
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Payment method</span>
                        <span>Transfer</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Transaction ID</span>
                        <span>Fsb-12PL-2011</span>
                    </div>
                </section>
                <section className="flex items-center gap-2">
                    <ExclamationIcon />
                    <span> Waiting for payment </span>
                </section>
                <section className="flex justify-between">
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Financial Institution</span>
                        <span>Bancoremit</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Ref Number</span>
                        <span>BNr9rvBBL8</span>
                    </div>
                </section>{" "}
                <section className="flex justify-between">
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Recipient amount</span>
                        <span>N161,200</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Fee</span>
                        <span>$0.00</span>
                    </div>
                </section>
                <section className="flex justify-between">
                    <span className="text-gray-600"> Rate: </span>
                    <span> 1USD: 408 NGN </span>
                </section>
            </section>
            <hr />
            <section className="flex flex-col gap-6 p-6">
                <section className="flex justify-between">
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Account name</span>
                        <span>Ozenua Tobi</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Ref Number</span>
                        <span>BNr9rvBBL8</span>
                    </div>
                </section>
                <section className="flex justify-between">
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Sort Code</span>
                        <span>004284</span>
                    </div>
                    <div className="flex flex-col gap-3">
                        <span className="text-gray-600">Account number</span>
                        <span>0123456789</span>
                    </div>
                </section>
            </section>
        </SendBuddieModal>
    );
}
