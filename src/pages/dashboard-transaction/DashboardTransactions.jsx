import { useState } from "react";
import { BiMoney } from "react-icons/bi";
import { HiDotsHorizontal, HiDownload } from "react-icons/hi";
import { Container } from "../../components";
import MetricSvg2 from "../../assets/images/MetricSvg2";
import TransactionHistory from "./TransactionHistory";
import { SendBuddiePopover } from "../../components/@ui-kits";

const { Menu, Item, Button } = SendBuddiePopover;

function Popover({ title }) {
    return (
        <SendBuddiePopover>
            <Button>
                <HiDotsHorizontal fontSize={20} />
            </Button>
            <Menu width={32} className="left-6 top-0 mt-2 -translate-y-1/2">
                <Item>{title}</Item>
            </Menu>
        </SendBuddiePopover>
    );
}

function DashboardTransactions() {
    const [isOpen, setIsOpen] = useState(false);
    // const [currentStep, setCurrentStep] = useState(1);
    const closeModal = () => {
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };
    return (
        <Container>
            <div className="flex w-9/12 flex-col gap-8">
                {/* content 1 */}
                <div className="flex flex-col gap-3">
                    <h2>Overview</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 py-8 px-5">
                            <h4 className="text-base">Total transactions</h4>
                            <h3 className="text-2xl font-medium">120</h3>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 py-8 px-5">
                            <h4 className="text-base">Successful transactions</h4>
                            <h3 className="text-2xl font-medium">98</h3>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 py-8 px-5">
                            <h4 className="text-base">Failed transactions</h4>
                            <h3 className="text-2xl font-medium">12</h3>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 py-8 px-5">
                            <h4 className="text-base">Pending transactions</h4>
                            <h3 className="text-2xl font-medium">10</h3>
                        </div>
                    </div>
                </div>
                {/* content 2 */}
                <div>
                    <h2>All Transactions</h2>
                    <div className="mt-4 flex justify-between">
                        <div className="flex gap-2">
                            <div className="flex items-center justify-between gap-3 rounded-lg bg-gray-100 py-2 px-3">
                                <h4>Showing:</h4>
                                <select
                                    name="currency"
                                    id=""
                                    className="inline-block border-none bg-transparent py-0 pr-10"
                                >
                                    <option value="All">All</option>
                                    <option value="All">Transfers</option>
                                    <option value="All">Exchanges</option>
                                    <option value="All">Currency swaps</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 py-2 px-3">
                                <h4>From:</h4>
                                <input type="date" name="" id="" className="border-0 focus:border-0 focus:ring-0" />
                            </div>
                            <div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 py-2 px-3">
                                <h4>To:</h4>
                                <input type="date" name="" id="" className="border-0 focus:border-0 focus:ring-0" />
                            </div>
                        </div>
                        <div>
                            <button type="button" className="btn-primary flex items-center gap-2 py-2 px-3">
                                <HiDownload fontSize={20} />
                                Export data
                            </button>
                        </div>
                    </div>
                    <div className="mt-5">
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
                                    {/* TODO: put country flag logo below */}
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
                                    <td className="p-5 text-base font-normal tracking-wider hover:cursor-pointer">
                                        <Popover title="view history" />
                                    </td>
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
                                    <td className="p-5 text-base font-normal tracking-wider">
                                        <HiDotsHorizontal fontSize={25} />
                                    </td>
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
                                    <td className="p-5 text-base font-normal tracking-wider">
                                        <HiDotsHorizontal fontSize={25} />
                                    </td>
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
                                    <td className="p-5 text-base font-normal tracking-wider">
                                        <HiDotsHorizontal fontSize={25} />
                                    </td>
                                </tr>{" "}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-8 h-full w-3/12 rounded-xl border border-neutral-200 bg-blue-brand py-3 text-white">
                <div className="flex flex-col items-center">
                    <div className="py-10">
                        <MetricSvg2 />
                    </div>
                    <p className="mb-1 text-center font-medium">Get Report</p>
                    <p className="mb-6 text-center font-medium">Download all transactions history</p>
                    <div className="w-full px-6 py-5">
                        <button type="button" className="btn-white block w-full" onClick={openModal}>
                            Download
                        </button>
                    </div>
                </div>
            </div>
            <TransactionHistory isOpen={isOpen} closeModal={closeModal} backdrop={false} />
        </Container>
    );
}

export default DashboardTransactions;
