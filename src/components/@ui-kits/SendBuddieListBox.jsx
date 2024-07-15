/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { countryFlags } from "../../utils";

export default function SendBuddieListBox({ data=[], onChange, value }) {
    return (
        <Listbox value={value} onChange={onChange}>
            <div className="relative h-full">
                <Listbox.Button
                    className="
                        relative w-full h-full cursor-pointer rounded-lg  rounded-r-none border border-r-0 border-gray-600 p-3 text-left
                        focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-green-500 
                    "
                >
                    <div className="flex items-center gap-1">
                        {value.countryCode && <img src={countryFlags[value.countryCode]} alt="" />}
                        <span className="truncate text-sm">{value.label}</span>
                    </div>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronUpDownIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="
                    absolute z-10 mt-1 max-h-44 w-full overflow-auto pb-5 
                    rounded-md bg-white py-1 text-base shadow-lg 
                    ring-1 ring-black ring-opacity-5 
                    focus:outline-none sm:text-sm">
                        {data.map((item) => (
                            <Listbox.Option
                                key={item.id}
                                className={({ active }) =>
                                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                                    }`
                                }
                                value={item}
                            >
                                {({ selected }) => (
                                    <>
                                        <div
                                            className={`flex items-center gap-2 ${
                                                selected ? "font-medium" : "font-normal"
                                            }`}
                                        >
                                            {item.countryCode && <img src={countryFlags[item.countryCode]} alt="" />}
                                            <span className="text-sm">{item.label}</span>
                                        </div>
                                        {selected ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </Transition>
            </div>
        </Listbox>
    );
}
