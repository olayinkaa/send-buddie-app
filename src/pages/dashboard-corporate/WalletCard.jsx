import { useNavigate } from "react-router-dom";
import { countryFlags } from "../../utils";
import { walletFlag } from "./constants";

const flagCode = (currency) => {
    return walletFlag.find((item) => item.currency === currency)?.alpha2Code;
};

export default function WalletCard({ wallet }) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-between rounded-lg border border-neutral-200 bg-white p-5 xl:flex-row">
            <div className="order-2 flex flex-col gap-2 xl:order-1">
                <span className="font-medium text-gray-500">{wallet.currency} wallet</span>
                <span className="text-xl font-semibold">{wallet.availableBalance}</span>
                <button type="button" onClick={() => navigate("/open-wallet",{
                    state:{
                        ...wallet
                    }
                })} className="mt-4 text-base text-blue-500">
                    Open Wallet
                </button>
            </div>
            <img src={countryFlags[flagCode(wallet?.currency)]} alt="flag" className="order-1 h-12 w-12 xl:order-2" />
        </div>
    );
}