import { useState, Fragment } from "react";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

export default function Notification() {
    const [emailEnabled, setEmailEnabled] = useState(false);
    const [InAppEnabled, setInAppEnabled] = useState(false);
    const [loginAttemptEnabled, setLoginAttemptEnabled] = useState(false);
    return (
        <div className="space-y-6 w-2/5">
            <Link to="/profile/security" className="flex gap-4 items-center">
                <button type="button">
                    <HiArrowNarrowLeft fontSize={30} />
                </button>
                <h4 className="text-xl font-normal">Notification</h4>
            </Link>
            <section className="flex flex-col gap-y-6 w-4/5">
                <div className="flex justify-between">
                    <span>InApp Notification</span>
                    <Switch checked={emailEnabled} onChange={setEmailEnabled} as={Fragment}>
                        {({ checked }) => (
                            <button
                                type="button"
                                className={`${
                                    checked ? "bg-blue-600" : "bg-gray-200"
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">InApp notifications</span>
                                <span
                                    className={`${
                                        checked ? "translate-x-6" : "translate-x-1"
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </button>
                        )}
                    </Switch>
                </div>{" "}
                <div className="flex justify-between">
                    <span>Email Notification</span>
                    <Switch checked={InAppEnabled} onChange={setInAppEnabled} as={Fragment}>
                        {({ checked }) => (
                            <button
                                type="button"
                                className={`${
                                    checked ? "bg-blue-600" : "bg-gray-200"
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Email notifications</span>
                                <span
                                    className={`${
                                        checked ? "translate-x-6" : "translate-x-1"
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </button>
                        )}
                    </Switch>
                </div>{" "}
                <div className="flex justify-between">
                    <span>Login Attempt</span>
                    <Switch checked={loginAttemptEnabled} onChange={setLoginAttemptEnabled} as={Fragment}>
                        {({ checked }) => (
                            <button
                                type="button"
                                className={`${
                                    checked ? "bg-blue-600" : "bg-gray-200"
                                } relative inline-flex h-6 w-11 items-center rounded-full`}
                            >
                                <span className="sr-only">Login Attempt</span>
                                <span
                                    className={`${
                                        checked ? "translate-x-6" : "translate-x-1"
                                    } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                                />
                            </button>
                        )}
                    </Switch>
                </div>
            </section>
        </div>
    );
}
