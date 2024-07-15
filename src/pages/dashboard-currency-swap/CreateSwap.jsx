/* eslint-disable react/prop-types */
import { useState } from "react";
import { SendBuddieModal, SendBuddieListBox } from "../../components/@ui-kits";
// import { countryFlags } from "../../utils";

const data = [
    { value: 1, label: "Wade Cooper", countryCode: "us" },
    { value: 2, label: "Arlene Mccoy", countryCode: "ng" },
    { value: 3, label: "Devon Webb", countryCode: "no" },
    { value: 4, label: "Tom Cook", countryCode: "es" },
    { value: 5, label: "Tanya Fox", countryCode: "ad" },
    { value: 6, label: "Messi Lionel", countryCode: "mv" }
  
];

export default function CreateSwap({ isOpen, closeModal, backdrop, onClick }) {
    const [selectedFrom, setSelectedFrom] = useState(data[0]);
    const [selectedTo, setSelectedTo] = useState(data[1]);

    return (
        <SendBuddieModal title="Create Swap" isOpen={isOpen} closeModal={closeModal} backdrop={backdrop}>
            <div className="mt-4 flex flex-col gap-6 p-6 pb-20">
                <div className="w-full space-y-1">
                    <label htmlFor="">Selling</label>
                    <div className="flex">
                        <div className="w-1/2">
                            <SendBuddieListBox value={selectedFrom} data={data} onChange={setSelectedFrom} />
                        </div>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="w-1/2 self-start rounded-lg rounded-l-none border p-3 focus:ring-0"
                        />
                    </div>
                </div>
                <div className="w-full space-y-1">
                    <label htmlFor="" className="">
                        To
                    </label>
                    <div className="flex">
                        <div className="w-1/2">
                            <SendBuddieListBox value={selectedTo} data={data} onChange={setSelectedTo} />
                        </div>
                        <input
                            type="text"
                            name=""
                            id=""
                            className="border-1 w-1/2 rounded-lg rounded-l-none p-3 focus:ring-0"
                        />
                    </div>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-700">Rate</span>
                    <span>1 USD = 408 NGN</span>
                </div>
                <button type="button" className="btn-primary" onClick={onClick}>
                    Continue
                </button>
                {/* <pre>{JSON.stringify(selectedItem, null, 2)}</pre> */}
            </div>
        </SendBuddieModal>
    );
}
