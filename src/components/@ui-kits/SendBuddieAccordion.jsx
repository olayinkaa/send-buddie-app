import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

function SendBuddieAccordion({ data}) {
    return (
        <div>
            {data.map((item) => {
                return (
                    <Disclosure key={item.id}>
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    className={`
                                    hover flex w-full justify-between border-0 border-b-2  
                                    px-4 py-5 text-left text-lg hover:bg-light-blue-brand
                                    dark:hover:bg-slate-600
                                    focus:outline-none focus-visible:ring
                                    focus-visible:ring-purple-500 focus-visible:ring-opacity-75`}
                                >
                                    <span>{item.title}</span>
                                    <ChevronUpIcon
                                        className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-blue-500`}
                                    />
                                </Disclosure.Button>
                                <Transition
                                    show={open}
                                    enter="transition ease duration-500 transform"
                                    enterFrom="opacity-0 -translate-y-8"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease duration-300 transform"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-8"
                                >
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg text-gray-500 dark:text-slate-400 ">
                                        {item.description}
                                    </Disclosure.Panel>
                                </Transition>
                            </>
                        )}
                    </Disclosure>
                );
            })}
        </div>
    );
}

SendBuddieAccordion.defaultProps = {
    data: [],
}
SendBuddieAccordion.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    data: PropTypes.array,
}
export default SendBuddieAccordion;
