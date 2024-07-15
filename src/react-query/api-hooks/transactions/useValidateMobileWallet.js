import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "../../../utils";

const postValidateMobileWallet = async (requestPayload) => {
    try {
        const response = await AuthHTTP.post(
            `/api/v1/transactions/transactions/validate-mobile-wallet`,
            requestPayload,
        );
        return response;
    } catch (error) {
        return error;
    }
};

const useValidateMobileWallet = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(postValidateMobileWallet, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;
    return {
        validateMobileWallet: mutate,
        isValidatingMobileWallet: isLoading,
        validateMobileWalletResponse: data,
    };
};

export default useValidateMobileWallet;
