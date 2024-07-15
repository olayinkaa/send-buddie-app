import { useState, useEffect } from "react";
import { BiCopy } from "react-icons/bi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SendBuddieSweetAlert } from "../../components/@ui-kits";

function InviteFriends({ isOpen, handleClose }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [copied]);

    // useEffect(()=> {
    //     navigator.mediaDevices.enumerateDevices().then(res=>console.log(res))
    // },[])

    return (
        <SendBuddieSweetAlert
            isOpen={isOpen}
            closeModal={handleClose}
            message=""
            title="Invite friends"
            backdrop={false}
            hasAnimation={false}
        >
            <div className="flex flex-col gap-3">
                <p className="text-xl text-center font-medium">Invite friends and earn an amount</p>
                <p className="text-center text-lg text-gray-600">
                    Invite a friend and you both get an amount each when they send over an amount to supported countries
                    in Africa
                </p>
                <div className="flex justify-between items-center bg-blue-100 p-3 rounded-xl">
                    <div className="flex flex-col">
                        <p className="text-lg">Your referral code</p>
                        <p className="text-lg">ADEDX65TS</p>
                    </div>
                    <div className="group flex relative">
                        <CopyToClipboard text="ADEDX65TS" onCopy={() => setCopied(true)}>
                            <button type="button">
                                <BiCopy fontSize={30} />
                            </button>
                        </CopyToClipboard>
                        <span
                            className={`transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute 
                                    left-1/2 -translate-x-1/2 -translate-y-full ${
                                        copied ? "opacity-100" : "opacity-0"
                                    } `}
                        >
                            Copied
                        </span>
                    </div>
                </div>
                <button type="button" className="bg-blue-500 px-4 py-3 rounded-xl text-white mt-2">
                    Invite friends
                </button>
                <p className="text-lg text-center">Terms and condition apply</p>
            </div>
        </SendBuddieSweetAlert>
    );
}

export default InviteFriends;
