import { useMutation } from "@tanstack/react-query";
import { HTTP } from "@/utils";

const posVerifyAccount = async (requestPayload) => {
    try {
        const response = await HTTP.post(`/api/v1/account/confirmation`, requestPayload);
        return response;
    } catch (error) {
        return Promise.reject(error)
    }
};

const useVerifyAccount = ({ onSuccess, onError } = {}) => {
    const Mutation = useMutation(posVerifyAccount, {
        onSuccess,
        onError,
    });

    const { mutate, data, isLoading } = Mutation;
    return {
        verifyAccount: mutate,
        isVerifyingAccount: isLoading,
        verifyAccountResponse: data,
    };
};

export default useVerifyAccount;
