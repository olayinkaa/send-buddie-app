import { ICON_LIST } from "@/utils/constant";
import { useAuth } from "@/hooks";

export default function RenderPageTwo({ onClose }) {
    const {
        authState: { user },
    } = useAuth();
    return (
        <div className="flex flex-col gap-y-2 items-center justify-center">
            <div>{ICON_LIST.success_lock_mark_icon}</div>
            <h4 className="text-lg font-bold text-gray-600">Take a minute to verify your identity, {user?.firstName}</h4>
            <p className="text-center text-gray-500">
                We are required by law to verify your identity before you can use your sendbuddie account. Your
                information is secure with strong encryption
            </p>
            <button type="button" className="w-full bg-blue-500 text-white p-4 rounded-lg mt-3">
                Verify identity
            </button>
            <button type="button" className="text-gray-600 mt-3" onClick={onClose}>
                Not now
            </button>
        </div>
    );
}
