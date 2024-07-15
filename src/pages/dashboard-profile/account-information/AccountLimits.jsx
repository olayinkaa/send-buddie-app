/* eslint-disable react/no-array-index-key */
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import { getClassNames } from "../../../utils";
import {CATEGORIES} from './constants'

export default function AccountLimits() {
    return (
        <div className="space-y-8 w-2/5">
            <div className="space-y-2">
                <Link to="/profile" className="flex gap-4 items-center">
                    <button type="button">
                        <HiArrowNarrowLeft fontSize={30} />
                    </button>
                    <h4 className="text-xl font-normal">Account Limits</h4>
                </Link>
                <div className="w-full max-w-md py-4 sm:px-0">
                    <Tab.Group>
                        <Tab.List className="flex space-x-1 p-1 border-none">
                            {Object.keys(CATEGORIES).map((category) => (
                                <Tab
                                    key={category}
                                    className={({ selected }) =>
                                        getClassNames(
                                            "w-full py-2.5 text-base font-medium leading-5 text-gray-700",
                                            "ring-0 focus:outline-none border-b-2",
                                            selected ? " border-blue-500": "border-gray-100",
                                        )
                                    }
                                >
                                    {category}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            {Object.values(CATEGORIES).map((posts, idx) => (
                                <Tab.Panel key={idx}>
                                    {posts.map((post) => (
                                        <div key={post.id} className="flex flex-col border-b py-3 hover:bg-gray-50">
                                            <p className="text-gray-500">{post.title}</p>
                                            <p className="tracking-wider font-medium text-lg">{post.amount}</p>
                                        </div>
                                    ))}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
        </div>
    );
}
