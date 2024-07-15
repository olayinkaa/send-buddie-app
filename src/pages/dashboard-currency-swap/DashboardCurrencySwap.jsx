import { useState, useCallback } from "react";
import { Container } from "../../components";
import person1 from "../../assets/images/2.png";
import InfoIcon from "../../assets/images/InfoIcon";
import CreateSwap from "./CreateSwap";
import CreateSwapSuccess from "./CreateSwapSuccess";

function DashboardCurrencySwap() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const closeModal = () => {
        setIsOpen(false);
    };
    const openModal = () => {
        setIsOpen(true);
    };
    const handleSwapNext = () => setCurrentStep((activeStep) => activeStep + 1);

    const displayCreateSwapStep = useCallback(
        (step) => {
            let render;
            switch (step) {
                case 1:
                    render = (
                        <CreateSwap isOpen={isOpen} closeModal={closeModal} backdrop={false} onClick={handleSwapNext} />
                    );
                    break;
                case 2:
                    render = (
                        <CreateSwapSuccess isOpen={isOpen} closeModal={closeModal} backdrop={false} onClick={handleSwapNext} />
                    );
                    break;
                default:
                    closeModal();
                    break;
            }
            return isOpen && render;
        },
        [isOpen],
    );
    return (
        <>
            <Container>
                <div className="flex w-9/12 flex-col gap-8">
                    {/* content 1 */}
                    <div className="flex flex-col gap-3">
                        <h2>Overview</h2>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 py-8 px-5">
                                <h4 className="text-base">Total swaps</h4>
                                <h3 className="text-2xl font-medium">120</h3>
                            </div>
                            <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 py-8 px-5">
                                <h4 className="text-base">Pending swaps</h4>
                                <h3 className="text-2xl font-medium">2</h3>
                            </div>
                            <div className="col-span-2 flex flex-col items-center justify-center gap-3 rounded-xl p-5">
                                <div>
                                    <button type="button" className="btn-primary" onClick={openModal}>
                                        Create new swap request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* content 2 */}
                    <div>
                        <h2>Available for exchange</h2>
                        <div className="mt-4 flex gap-2">
                            <div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 py-2 px-3">
                                <h4>Selling currency:</h4>
                                <select name="currency" id="" className="border-none bg-gray-100 py-0 pr-10">
                                    <option value="All">All</option>
                                    <option value="All">USD</option>
                                    <option value="All">EUR</option>
                                    <option value="All">GB</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 py-2 px-3">
                                <h4>Buying currency:</h4>
                                <select name="currency" id="" className="border-none bg-gray-100 py-0 pr-10">
                                    <option value="All">All</option>
                                    <option value="All">USD</option>
                                    <option value="All">EUR</option>
                                    <option value="All">GB</option>
                                </select>
                            </div>
                            <div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 py-2 px-3">
                                <select name="currency" id="" className="border-none bg-gray-100 py-0 pr-10">
                                    <option value="All">USD</option>
                                    <option value="All">EUR</option>
                                    <option value="All">GB</option>
                                </select>
                                <h4>1000</h4>
                            </div>
                        </div>
                        <div className="mt-5">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b text-left text-lg font-normal tracking-wider text-gray-600">
                                        <th className="p-5 ">Seller</th>
                                        <th className="p-5">Selling Currency</th>
                                        <th className="p-5">Amount</th>
                                        <th className="p-5">Buying Currency</th>
                                        <th className="p-5">
                                            <span className="hidden">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-5 text-base font-normal tracking-wider">
                                            <div className="inline-flex items-center gap-2">
                                                <img src={person1} alt="person logo" className="h-10 w-10" />
                                                <span>Olayinka James</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                        <td className="p-5 text-base font-normal tracking-wider">N40,340</td>
                                        <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                        <td className="p-5 text-base font-normal tracking-wider">
                                            <button type="button" className="btn-primary rounded-none px-4 py-1">
                                                Buy
                                            </button>
                                        </td>
                                    </tr>{" "}
                                    <tr className="border-b">
                                        <td className="p-5 text-base font-normal tracking-wider">
                                            <div className="inline-flex items-center gap-2">
                                                <img src={person1} alt="person logo" className="h-10 w-10" />
                                                <span>Olayinka James</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                        <td className="p-5 text-base font-normal tracking-wider">N40,340</td>
                                        <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                        <td className="p-5 text-base font-normal tracking-wider">
                                            <button type="button" className="btn-primary rounded-none px-4 py-1">
                                                Buy
                                            </button>
                                        </td>
                                    </tr>{" "}
                                    <tr className="border-b">
                                        <td className="p-5 text-base font-normal tracking-wider">
                                            <div className="inline-flex items-center gap-2">
                                                <img src={person1} alt="person logo" className="h-10 w-10" />
                                                <span>Olayinka James</span>
                                            </div>
                                        </td>
                                        <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                        <td className="p-5 text-base font-normal tracking-wider">N40,340</td>
                                        <td className="p-5 text-base font-normal tracking-wider">NG Naira </td>
                                        <td className="p-5 text-base font-normal tracking-wider">
                                            <button type="button" className="btn-primary rounded-none px-4 py-1">
                                                Buy
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="flex w-3/12 flex-col gap-8 pt-9">
                    <div className="flex flex-col items-center rounded-xl bg-blue-brand px-5 pt-6 pb-20 text-white">
                        <InfoIcon />
                        <h2 className="my-4 text-xl">How it works</h2>
                        <ul className="list-disc space-y-3 px-10">
                            <li className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem nulla.
                            </li>{" "}
                            <li className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem nulla.
                            </li>{" "}
                            <li className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit exercitationem nulla.
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            {displayCreateSwapStep(currentStep)}
        </>
    );
}

export default DashboardCurrencySwap;
