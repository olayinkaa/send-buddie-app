import { RadioGroup } from "@headlessui/react";
import { BiChevronRight } from "react-icons/bi";
import { countryFlags } from "../../../utils";
import { NEW_WALLET_INFO } from "./constants";

export default function SendBuddieRadioGroup({ title, value, onChange, accountDetails }) {
    return (
        <RadioGroup value={value} onChange={onChange}>
            <RadioGroup.Label>{title}</RadioGroup.Label>
            {NEW_WALLET_INFO.filter((item) => ["BOTH", accountDetails?.accountType].includes(item.accountType)).map(
                (wallet) => {
                    return (
                        <RadioGroup.Option value={wallet.currencyCode} key={wallet.currencyCode}>
                            {({ checked }) => (
                                <RadioGroup.Description
                                    as="div"
                                    className={`
                                        group flex justify-between rounded-lg border border-neutral-200
                                        p-3 transition duration-700 hover:translate-x-1 hover:cursor-pointer
                                        hover:bg-light-blue-brand my-4 ${checked && "bg-blue-200"}
                                    `}
                                >
                                    <div className="flex items-center gap-2 ">
                                        <img src={countryFlags[wallet.alpha2Code]} alt="" className="h-6 w-6" />
                                        <span>{wallet.description}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <span>{wallet.symbol} 0</span>
                                        <BiChevronRight fontSize={25} />
                                    </div>
                                </RadioGroup.Description>
                            )}
                        </RadioGroup.Option>
                    );
                },
            )}
        </RadioGroup>
    );
}

SendBuddieRadioGroup.defaultProps = {
    title: "",
};
