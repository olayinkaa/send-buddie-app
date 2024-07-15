import { IoIosCheckmarkCircleOutline, IoIosRadioButtonOff } from "react-icons/io";

export default function RenderPageOne({ onClick }) {
    return (
        <>
            <div className="flex gap-x-3 bg-gray-100/70 p-4 rounded-xl transition duration-1000 hover:translate-x-1">
                <div>
                    <IoIosCheckmarkCircleOutline className="text-blue-500 text-3xl" />
                </div>
                <div>
                    <h4 className="font-bold text-gray-700">Verify your email</h4>
                    <p className="text-gray-500">
                        To protect your account, we&apos;ll need to verify your email so you can recover your account
                        should you need to.
                    </p>
                </div>
                <span className="bg-blue-200 py-1 px-4 self-start rounded-2xl ring-2 ring-blue-400 text-sm text-blue-600">
                    Done
                </span>
            </div>
            <div className="flex gap-x-3 bg-gray-100/70 p-4 rounded-xl transition duration-1000 hover:translate-x-1">
                <div>
                    <IoIosRadioButtonOff className="text-blue-500 text-3xl" />
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold text-gray-700">Verify your identity</h4>
                    <p className="text-gray-600 mb-5">
                        we&apos;re required by law to verify your identity before you can send any amount.
                    </p>
                    <div>
                        <button
                            type="button"
                            className="bg-blue-200 text-blue-500 ring-2 ring-blue-500 px-4 py-2 rounded-lg active:bg-blue-100"
                            onClick={onClick}
                        >
                            Verify Identity
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
