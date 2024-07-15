import { useState, useCallback } from "react";
import { BiMoney, BiPlusCircle } from "react-icons/bi";
import flag1 from "../assets/images/flag_1.png";
import MetricSvg from "../assets/images/MetricSvg";
// import { SendBuddieModal } from "../components/@ui-kits";
import {
    EnterAmount,
    ChooseAccount,
    ChoosePaymentModal,
    BankCard,
    EnterPin,
    DepositSummary,
    SuccessSummary,
} from "../features/dashboard/fund-account";

function DashboardCorporate2() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(7);
    const [hasWallet] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
        // TODO::remember to uncomment below
        // setCurrentStep(1)
    };
    // eslint-disable-next-line no-unused-vars
    const openModal = () => {
        setIsOpen(true);
    };
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
                        {hasWallet ? (
                            <div>
                                <h2 className="mb-2 text-lg">Account Balance</h2>
                                <div className="grid grid-cols-4 gap-4">
                                    <div className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-5 xl:flex-row">
                                        <div className="order-2 flex flex-col gap-2 xl:order-1">
                                            <span className="font-medium text-gray-500">NGN wallet</span>
                                            <span className="text-xl font-semibold">534,309</span>
                                            <span className="mt-4 text-base text-blue-500">Open Wallet</span>
                                        </div>
                                        <img src={flag1} alt="flag" className="order-1 h-12 w-12 xl:order-2" />
                                    </div>
                                    <div className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-5 xl:flex-row">
                                        <div className="order-2 flex flex-col gap-2 xl:order-1">
                                            <span className="font-medium text-gray-500">NGN wallet</span>
                                            <span className="text-xl font-semibold">534,309</span>
                                            <span className="mt-4 text-base text-blue-500">Open Wallet</span>
                                        </div>
                                        <img src={flag1} alt="flag" className="order-1 h-12 w-12 xl:order-2" />
                                    </div>
                                    <div className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-5 xl:flex-row">
                                        <div className="order-2 flex flex-col gap-2 xl:order-1">
                                            <span className="font-medium text-gray-500">NGN wallet</span>
                                            <span className="text-xl font-semibold">534,309</span>
                                            <span className="mt-4 text-base text-blue-500">Open Wallet</span>
                                        </div>
                                        <img src={flag1} alt="flag" className="order-1 h-12 w-12 xl:order-2" />
                                    </div>
                                    <div className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-5 xl:flex-row">
                                        <div className="order-2 flex flex-col gap-2 xl:order-1">
                                            <span className="font-medium text-gray-500">NGN wallet</span>
                                            <span className="text-xl font-semibold">534,309</span>
                                            <span className="mt-4 text-base text-blue-500">Open Wallet</span>
                                        </div>
                                        <img src={flag1} alt="flag" className="order-1 h-12 w-12 xl:order-2" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div>
                                <div className="flex flex-col gap-4 rounded-xl bg-blue-brand px-5 py-10 text-white">
                                    <h3 className="text-xl">Create Wallet to get started</h3>
                                    <button type="button" className="flex items-center gap-2">
                                        <BiPlusCircle fontSize={20} />
                                        <span>Create Wallet</span>
                                    </button>
                                </div>
                            </div>
                        )}
                        {/* content 2  */}
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-5 rounded-xl bg-dashboardIntro bg-cover bg-repeat bg-blue-800 px-5 py-10 text-white">
                                <h3 className="w-3/5 text-2xl">Send money to family, friends and other businesses</h3>
                                {/* <button type="button" className="flex items-center gap-2">
                                    <BiPlusCircle fontSize={20} />
                                    <span className="text-lg">Create Wallet</span>
                                </button> */}
                            </div>
                            <div className="flex flex-col gap-5 rounded-xl bg-her bg-dark-brand px-5 py-10 text-white">
                                <h3 className="w-3/5 text-2xl">Create multiple domiciliary wallets</h3>
                                {/* <button type="button" className="flex items-center gap-2">
                                    <BiPlusCircle fontSize={20} />
                                    <span className="text-lg">Create Wallet</span>
                                </button> */}
                            </div>
                        </div>
                        {/* content 4 */}
                        <div className="flex flex-col space-y-3">
                            <h4 className="text-2xl">Activities</h4>
                            <div>
                                <table className="w-full">
                                    <tbody>
                                        <tr className="border-b">
                                            <td className="p-5 text-base font-normal tracking-wider">
                                                <div className="flex items-center gap-2">
                                                    <span className="rounded-full bg-green-100 p-2">
                                                        <BiMoney fontSize={15} className="text-green-500" />
                                                    </span>
                                                    <span>Fund Wallet</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                            <td className="p-5 text-base font-normal tracking-wider">N40,340</td>
                                            <td className="p-5 text-base font-normal tracking-wider">
                                                <div className="inline-flex items-center gap-1 bg-green-100 p-1">
                                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-base font-normal tracking-wider">Card</td>
                                            <td className="p-5 text-base font-normal tracking-wider"> Dec 7, 2019 </td>
                                        </tr>{" "}
                                        <tr className="border-b">
                                            <td className="p-5 text-base font-normal tracking-wider">
                                                <div className="flex items-center gap-2">
                                                    <span className="rounded-full bg-green-100 p-2">
                                                        <BiMoney fontSize={15} className="text-green-500" />
                                                    </span>
                                                    <span>Fund Wallet</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                            <td className="p-5 text-base font-normal tracking-wider">N40,340</td>
                                            <td className="p-5 text-base font-normal tracking-wide">
                                                <div className="inline-flex items-center gap-1 bg-gray-200 p-1">
                                                    <div className="h-2 w-2 rounded-full bg-gray-500" />
                                                    <span>Waiting payment</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-base font-normal tracking-wider">Card</td>
                                            <td className="p-5 text-base font-normal tracking-wider"> Dec 7, 2019 </td>
                                        </tr>{" "}
                                        <tr className="border-b">
                                            <td className="p-5 text-base font-normal tracking-wider">
                                                <div className="flex items-center gap-2">
                                                    <span className="rounded-full bg-green-100 p-2">
                                                        <BiMoney fontSize={15} className="text-green-500" />
                                                    </span>
                                                    <span>Fund Wallet</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                            <td className="p-5 text-base font-normal tracking-wider">N40,340</td>
                                            <td className="p-5 text-base font-normal tracking-wider">
                                                <div className="inline-flex items-center gap-1 bg-green-100 p-1">
                                                    <div className="h-2 w-2 rounded-full bg-green-500" />
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-base font-normal tracking-wider">Card</td>
                                            <td className="p-5 text-base font-normal tracking-wider"> Dec 7, 2019 </td>
                                        </tr>{" "}
                                        <tr className="border-b">
                                            <td className="p-5 text-base font-normal tracking-wider">
                                                <div className="flex items-center gap-2">
                                                    <span className="rounded-full bg-green-100 p-2">
                                                        <BiMoney fontSize={15} className="text-green-500" />
                                                    </span>
                                                    <span>Fund Wallet</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                            <td className="p-5 text-base font-normal tracking-wider">N40,340</td>
                                            <td className="p-5 text-base font-normal tracking-wide">
                                                <div className="inline-flex items-center gap-1 bg-gray-200 p-1">
                                                    <div className="h-2 w-2 rounded-full bg-gray-500" />
                                                    <span>Waiting payment</span>
                                                </div>
                                            </td>
                                            <td className="p-5 text-base font-normal tracking-wider">Card</td>
                                            <td className="p-5 text-base font-normal tracking-wider"> Dec 7, 2019 </td>
                                        </tr>{" "}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* right side */}
                    <div
                        className={`${
                            hasWallet && "mt-8"
                        } h-full w-3/12 rounded-xl border border-neutral-200 bg-inactive-brand py-3`}
                    >
                        <div className="flex flex-col items-center">
                            <div className="pb-10">
                                <MetricSvg />
                            </div>
                            <span className="mb-10 text-center font-medium">Portfolio summary</span>
                            <div className="flex w-full items-center justify-between gap-4 px-6">
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" name="" id="" />
                                    <span>Naira wallet</span>
                                </div>{" "}
                                <div className="flex items-center gap-1">
                                    <input type="checkbox" name="" id="" />
                                    <span>Dollar wallet</span>
                                </div>
                            </div>
                            <div className="w-full px-6 py-5">
                                <button type="button" className="btn-primary block w-full">
                                    Download summary
                                </button>
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

export default DashboardCorporate2;
