import { useState, useCallback, useEffect } from "react";
import { BiTransferAlt, BiSend, BiMoney , BiCopy} from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import _ from "lodash";
import {
    EnterAmount,
    ChooseAccount,
    ChoosePaymentModal,
    BankCard,
    EnterPin,
    DepositSummary,
    SuccessSummary,
} from "../../features/dashboard/fund-account";
import { FeatureButton } from "../../styles";

const transactions = [
    {
        id: 1,
        walletType: "Fund Wallet",
        currency: "NG Naira",
        amount: "N40,300",
        status: "Completed",
        paymentMethod: "Card deposit",
        date: "Dec 7, 2019",
    },
    {
        id: 2,
        walletType: "Fund Wallet",
        currency: "NG Naira",
        amount: "N40,300",
        status: "Completed",
        paymentMethod: "Card deposit",
        date: "Dec 7, 2019",
    },
    {
        id: 3,
        walletType: "Fund Wallet",
        currency: "NG Naira",
        amount: "N40,300",
        status: "Waiting Payment",
        paymentMethod: "Card deposit",
        date: "Dec 7, 2019",
    },
];

export default function DashboardOpenWallet() {
    const [isOpen, setIsOpen] = useState(false);
    const [copied, setCopied] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();
    const walletDetails = location?.state;

    const closeModal = () => {
        setIsOpen(false);
        // TODO::remember to uncomment below
        // setCurrentStep(1)
    };

    useEffect(() => {
        if (_.isEmpty(walletDetails)) {
            navigate("/dashboard");
        }
    }, [navigate, walletDetails]);

    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [copied]);

    const handleFundAccountNext = () => setCurrentStep((activeStep) => activeStep + 1);

    const displayFundAccountStep = useCallback(
        (step) => {
            let render;
            switch (step) {
                case 1:
                    render = (
                        <ChoosePaymentModal
                            isOpen={isOpen}
                            closeModal={closeModal}
                            backdrop={false}
                            onClick={handleFundAccountNext}
                        />
                    );
                    break;
                case 2:
                    render = (
                        <ChooseAccount
                            isOpen={isOpen}
                            closeModal={closeModal}
                            backdrop={false}
                            onClick={handleFundAccountNext}
                        />
                    );
                    break;
                case 3:
                    render = <EnterAmount isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                case 4:
                    render = <BankCard isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                case 5:
                    render = <EnterPin isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                case 6:
                    render = <DepositSummary isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                case 7:
                    render = <SuccessSummary isOpen={isOpen} closeModal={closeModal} backdrop={false} />;
                    break;
                default:
                    closeModal();
                    break;
            }
            return isOpen && render;
        },
        [isOpen],
    );

    // eslint-disable-next-line no-unused-vars

    return (
        <>
            <div className="w-full p-4">
                <div className="mx-auto flex w-[95%] gap-4">
                    {/* left side */}
                    <div className="flex w-9/12 flex-col gap-8">
                        {/* content 1 */}
                        <div className="flex flex-col gap-4 rounded-xl bg-blue-brand px-5 py-10 text-white">
                            <h3 className="text-xl">{walletDetails?.currency} WALLET</h3>
                            <h1 className="text-4xl">{walletDetails?.availableBalance}</h1>
                        </div>
                        {/* content 2  */}
                        <div className="grid grid-cols-3 gap-4">
                            <FeatureButton type="button">
                                <span className="mr-2 rounded-md text-black">
                                    <BiSend fontSize={20} />
                                </span>
                                <span>Send money</span>
                            </FeatureButton>
                            <FeatureButton type="button">
                                <span className="mr-2  rounded-md  text-black">
                                    <BiTransferAlt fontSize={20} />
                                </span>
                                <span>Exchange</span>
                            </FeatureButton>{" "}
                            <FeatureButton type="button" onClick={openModal}>
                                <span className="mr-2  rounded-md text-black">
                                    <BiMoney fontSize={20} />
                                </span>
                                <span>Fund account</span>
                            </FeatureButton>
                        </div>

                        {/* content 3 */}
                        <div className="flex flex-col space-y-3">
                            <h4 className="text-2xl">Activities</h4>
                            <div>
                                <div className="bg-inactive-brand rounded-lg py-44">
                                    <div className="flex flex-col items-center">
                                        <MdPayments fontSize={40} className="text-gray-500" />
                                        <h3 className="text-gray-600 text-base">No transactions yet</h3>
                                        <h3 className="text-gray-600 text-base">Create your first transactions</h3>
                                        <button type="button" className="text-blue-500 text-lg">
                                            send money
                                        </button>
                                    </div>
                                </div>
                                <table className="w-full hidden">
                                    <tbody>
                                        {transactions.map((item) => (
                                            <tr key={item.id} className="border-b">
                                                <td className="p-5 text-base font-normal tracking-wider">
                                                    <div className="flex items-center gap-2">
                                                        <span className="rounded-full bg-green-100 p-2">
                                                            <BiMoney fontSize={15} className="text-green-500" />
                                                        </span>
                                                        <span>{item.walletType}</span>
                                                    </div>
                                                </td>
                                                <td className="p-5 text-base font-normal tracking-wider">
                                                    {item.currency}
                                                </td>
                                                <td className="p-5 text-base font-normal tracking-wider">
                                                    {item.amount}
                                                </td>
                                                <td className="p-5 text-base font-normal tracking-wider">
                                                    <div
                                                        className={`inline-flex items-center gap-1 ${
                                                            item.status === "Completed" ? "bg-green-200" : "bg-gray-200"
                                                        } p-1`}
                                                    >
                                                        <div
                                                            className={`h-2 w-2 rounded-full ${
                                                                item.status === "Completed"
                                                                    ? "bg-green-500"
                                                                    : "bg-gray-500"
                                                            }`}
                                                        />
                                                        <span>{item.status}</span>
                                                    </div>
                                                </td>
                                                <td className="p-5 text-base font-normal tracking-wider">
                                                    {item.paymentMethod}
                                                </td>
                                                <td className="p-5 text-base font-normal tracking-wider">
                                                    {item.date}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="h-full w-3/12 rounded-xl border border-neutral-200 bg-inactive-brand py-3">
                        <div className="flex flex-col p-4 pt-0 space-y-4">
                            <h2 className="font-medium">Account details</h2>
                            <div>
                                <h3 className="text-gray-500">Bank name</h3>
                                <h3 className="font-medium">GT Bank</h3>
                            </div>
                            <div>
                                <h3 className="text-gray-500">Bank account number</h3>
                                <h3 className="font-medium">2067871311 (savings account)</h3>
                            </div>
                            <ul className="list-disc ml-4 space-y-2 text-gray-500">
                                <li>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos. Mollitia ut
                                    magnam ex quisquam repellendus eum cum provident nam.
                                </li>
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, dolor.</li>
                            </ul>

                            <div className="group flex relative">
                                <CopyToClipboard text="2067871311" onCopy={() => setCopied(true)}>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center gap-1 bg-blue-500 px-4 py-2 rounded-lg text-white w-full"
                                    >
                                        <BiCopy fontSize={20}/>
                                        Copy account number
                                    </button>
                                </CopyToClipboard>
                                <span
                                    className={`transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute 
                                    left-1/2 -translate-x-1/2 -translate-y-full ${
                                        copied ? "opacity-100" : "opacity-0"
                                    } `}
                                >
                                    Copied
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* TODO: list of all modal components */}
            {/* <ChooseAccount isOpen={isOpen} closeModal={closeModal} backdrop={false}/> */}
            {/* <EnterAmount isOpen={isOpen} closeModal={closeModal} backdrop={false}/> */}
            {/* <EnterPin isOpen={isOpen} closeModal={closeModal} backdrop={false}/> */}
            {displayFundAccountStep(currentStep)}
        </>
    );
}
