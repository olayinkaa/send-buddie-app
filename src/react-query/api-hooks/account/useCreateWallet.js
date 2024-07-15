import { useMutation } from "@tanstack/react-query";
import { AuthHTTP } from "@/utils";

const createNewWallet = async (requestPayload) => {
    try {
        const response = await AuthHTTP.post(`/api/v1/account/add-wallet`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
};

const useCreateWallet = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(createNewWallet, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;

    return {
        createWallet: mutate,
        isCreatingWallet: isLoading,
        createWalletResponse: data,
    };
};

export default useCreateWallet;
